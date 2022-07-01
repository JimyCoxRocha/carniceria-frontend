import { Component, OnInit } from '@angular/core';
import {MenuItem, SelectItemGroup} from 'primeng/api';
import { ProductsService } from 'src/app/core/services';
import { IFormDetail, IItemGroupSelected, IQuotation } from '../interfaces/store-detail.interface';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  activeIndex: number = 0;
  quotation: IQuotation = {} as IQuotation;
  provinceSelected: IItemGroupSelected = {label: '', value: 0 } as IItemGroupSelected;
  formStore: IFormDetail = {
    "email": "terraxted@gmail.com",
    "identity": "0958657843",
    "name": "Jimito",
    "surname": "Cox Rocha",
    "direction1": "direccion 1",
    "direction2": "direccion 2",
    "cellphone": "0958657843"
  } as IFormDetail;


    constructor(
      private productsService: ProductsService
    ) {
      //this.productsService.getProductInCar();
    }

  items: MenuItem[] = [
    {
      label: 'Inicio'
    },
    {
      label: 'Envío',
    },
    {
      label: 'Listo'
    }
  ];

  groupedCities: SelectItemGroup[] = [
    {
        label: 'Provincias', value: 'de', 
        items: [
            {label: 'Berlin', value: 1},
            {label: 'Frankfurt', value: 2},
            {label: 'Hamburg', value: 3},
            {label: 'Munich', value: 4},
            {label: 'Chicago', value: 5},
            {label: 'Los Angeles', value: 6},
            {label: 'New York', value: 7},
            {label: 'San Francisco', value: 8}
        ],
        
    }
  ];
  
  ngOnInit(): void {
  }

  get getProductsInCar(){
    return this.productsService._productsInCar;
  }

  get isLoadingProducts(){
    return this.productsService._isLoading;
  }

  get getQuotation(){
    
    
    const quotation: IQuotation = {
      discount: this.discount,
      subTotal: this.subTotal,
      total: this.total,
      provinceAmount: this.provinceSelected.value,
      provinceName: this.provinceSelected.label
    }
    return quotation;
  }

  get discount(){
    const discount = 0;
    return discount;
  }

  get subTotal(){
    let subTotal = 0;
    this.getProductsInCar.map(product => {
      subTotal += (product.amount * product.precio);
    });
    return subTotal;
  }

  get total(){
    return (this.subTotal + this.discount);
  }


  step(step: number){
    console.log(this.formStore);
    this.activeIndex = step;
  }

  setProvince(province: IItemGroupSelected){
    this.provinceSelected = province;
  }
  
}
