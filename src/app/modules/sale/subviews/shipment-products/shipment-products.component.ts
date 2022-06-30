import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import { Message, MessageService, PrimeNGConfig, SelectItemGroup } from 'primeng/api';
import { ValidatorService } from 'src/app/core/services/validator.service';
import { IFormDetail, IItemGroupSelected } from '../../interfaces/store-detail.interface';

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

  @Input() groupedCities: SelectItemGroup[] = [];
  @Output() setProvince = new EventEmitter<IItemGroupSelected>();
  @Output() formStore = new EventEmitter<IFormDetail>();
  @Output() step = new EventEmitter<number>();

showViaService() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}

  province: number = 0;
  
  get provinceSelected() : IItemGroupSelected{
    let city: IItemGroupSelected = { label: '', value: 2 }; //parametrizar precio mínimo
    
    const citySelected: IItemGroupSelected[] = this.groupedCities[0].items as IItemGroupSelected[];
    const itemSelected = citySelected.find(province => province.value === this.province) || city;
    
    return itemSelected;
  }

    emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    onlyLetterSpacesRegex: RegExp = /^[A-Za-z ]+$/; 
    onlyNumbersRegex: RegExp = /^[0-9]+$/; 

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

  noSpecial: RegExp = /^[^<>*!]+$/

  constructor(private messageService: MessageService, private validatorService: ValidatorService) {}

  ngOnInit(): void {
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
      this.formStore.emit({
        email: this.email,
        identity: this.identity,
        name: this.name,
        surname: this.surname,
        direction1: this.direction1,
        direction2: this.direction2,
        cellphone: this.cellphone,
      });
  
      this.step.emit(2);
    }
  }

  goBack(){
    this.step.emit(0);
  }
}
