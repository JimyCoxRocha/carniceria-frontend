import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import { Message, MessageService, PrimeNGConfig, SelectItemGroup } from 'primeng/api';
import { ValidatorService } from 'src/app/core/services/validator.service';
import { IFormDetail, IItemGroupSelected } from '../../interfaces/store-detail.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { SaleService } from '../../services/sale.service';
import { IUserInformation } from 'src/app/modules/auth/interfaces/auth.interface';
import { IProductCarStore } from 'src/app/core/services';
import { ISaleDetail } from '../../interfaces/sale.interface';

interface IFormBlur {
  emailBlur: boolean;
  identityBlur: boolean;
  name: boolean,
  surname: boolean,
  direction1: boolean,
  direction2: boolean,
  cellphone: boolean
}



@Component({
  selector: 'app-shipment-products',
  templateUrl: './shipment-products.component.html',
  styleUrls: ['./shipment-products.component.css'],
  animations: [
    trigger('errorState', [
        state('hidden', style({
            opacity: 0
        })),
        state('visible', style({
            opacity: 1
        })),
        transition('visible => hidden', animate('400ms ease-in')),
        transition('hidden => visible', animate('400ms ease-out'))
    ])
  ],
  providers: [MessageService]
})
export class ShipmentProductsComponent implements OnInit {
  @Output() setProvince = new EventEmitter<IItemGroupSelected>();
  @Output() formStore = new EventEmitter<IFormDetail>();
  @Output() step = new EventEmitter<number>();
  @Input() products: IProductCarStore[] = [];

  isLoadingProvinces: boolean = false;
  isLoadingDetailClient: boolean = false;
  isLoadingSendSale: boolean = false;
  useDataSimple: IUserInformation | null = null;

  groupedCities: SelectItemGroup[] = [];
  province: number = 0;
  
  emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  onlyLetterSpacesRegex: RegExp = /^[A-Za-z ]+$/; 
  onlyNumbersRegex: RegExp = /^[0-9]+$/; 
  noSpecial: RegExp = /^[^<>*!]+$/
  
  formBlur: IFormBlur = {
    emailBlur: false,
    identityBlur: false,
    name: false,
    surname: false,
    direction1: false,
    direction2: false,
    cellphone:  false 
  };  

  email: string = "";
  identity: string = "";
  name: string = "";
  surname: string ="";
  direction1: string = "";
  direction2: string = "";
  cellphone: string = '';

  get provinceSelected() : IItemGroupSelected  | undefined{
    const citySelected: IItemGroupSelected[] = this.groupedCities[0].items as IItemGroupSelected[];
    const itemSelected = citySelected.find(province => province.value === this.province);
    return itemSelected;
  }

  constructor(
    private validatorService: ValidatorService,
    private authService: AuthService,
    private saleService: SaleService
    ) {
      
      this.isLoadingProvinces = true;
      this.saleService.getProvinces().subscribe(provinces => {
        this.isLoadingProvinces = false;
        this.groupedCities = provinces.data;
        if( this.hasOnlyOneCity){
           this.province = this.groupedCities[0].items[0].value;
           this.changeProvince();
        }
      });

    if(this.authService.isAuthUser()){
      this.isLoadingDetailClient = true;
        this.authService.getSimpleDataUser().subscribe(data => {
          this.useDataSimple = data.data;

          this.isLoadingDetailClient = false;
          this.email = data.data.email,
          this.identity = data.data.cedula,
          this.surname = data.data.apellido,
          this.name = data.data.nombre,
          this.direction1 = data.data.direccion1 ? data.data.direccion1 : '',
          this.direction1 = data.data.direccion2 ? data.data.direccion2 : ''
        });
      }
  }

  ngOnInit(): void {
  }

  get hasOnlyOneCity(){
    return this.groupedCities.length == 1 
    && this.groupedCities[0].items
    && this.groupedCities[0].items.length == 1
  }

  setBlur(
    element: 'emailBlur' | 'identityBlur' | 'name' 
    |'surname' | 'direction1' |'direction2' 
    | 'cellphone'){
    this.formBlur[element] = true;
  }


  get isValidIdentity(){
    if(!this.formBlur.identityBlur) return true;

    return this.validatorService.isValidIdentification(this.identity);
  }

  isValidField(element: 'emailBlur' | 'identityBlur' | 'name' 
  |'surname' | 'direction1' |'direction2' 
  | 'cellphone'){
    if(!this.formBlur[element]) return true;

    switch (element) {
      case 'identityBlur':
        return this.validatorService.isValidIdentification(this.identity);
      case 'name':
        return this.name.length > 3 ? true : false;
      case 'surname':
        return this.surname.length > 3 ? true : false;
      case 'direction1':
        return this.direction1.length > 4 ? true : false;
    
      default:
        return this.cellphone.length == 10 ? true : false
    }
  }

  changeProvince(){
    if(this.provinceSelected)
      this.setProvince.emit(this.provinceSelected);
  }

  identityPress(event: any){
    this.identity.length > 9
    && event.preventDefault();;
  }

  get isValidNextStep(){
    return this.emailRegex.test(this.email) && this.name.trim().length > 3
    && this.surname.trim().length > 3 && this.identity.length == 10
    && this.direction1.trim().length > 4
    && this.cellphone.trim().length == 10;
  }

  nextStep(){
    
    if(this.isValidNextStep){
      const form : IFormDetail = {
        email: this.email,
        identity: this.identity,
        name: this.name,
        surname: this.surname,
        direction1: this.direction1,
        direction2: this.direction2,
        cellphone: this.cellphone,
      }

      this.buyProducts(form);
    }
  }

  buyProducts(form : IFormDetail){
    this.isLoadingSendSale = true;
    const saleDetail: ISaleDetail[] = this.products.map(
      product => {
        console.log(product)
        return { cantidad: product.amount, idProducto: product.idProducto }
      }
    );

    const detailOfSale = {
      cliente: {
        email: this.email,
        nombre: this.name,
        apellido: this.surname,
        idSexo:1 ,
        cedula: this.identity,
        direccion1: this.direction1,
        direccion2: this.direction2,
        idCiudad: this.provinceSelected?.title,
      } as IUserInformation,
      detalleVenta: saleDetail,
      motivoCostosAdicional: "Costos de Transporte",
      direccion: this.direction1,
      referencia: this.direction2,
      idCiudad: this.provinceSelected?.title,
    };

    if(this.authService.isAuthUser()){
      this.saleService.setSaleUser(detailOfSale).subscribe(x => {
        this.isLoadingSendSale = false;
        this.emitValuesSales(form);
      })
    }else{
      this.saleService.setSaleNoUser(detailOfSale).subscribe(x => {
        this.isLoadingSendSale = false;
        this.emitValuesSales(form);
      })
    }
  }

  emitValuesSales(form : IFormDetail){
    this.formStore.emit(form);
    this.step.emit(2);
  }

  goBack(){
    this.step.emit(0);
  }
}
