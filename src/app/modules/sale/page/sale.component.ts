import { Component, OnInit } from '@angular/core';
import {MenuItem, SelectItemGroup} from 'primeng/api';
import { ProductsService } from 'src/app/core/services';
import { IUserInformation } from '../../auth/interfaces/auth.interface';
import { AuthService } from '../../auth/services/auth.service';
import { IFormDetail, IItemGroupSelected, IQuotation } from '../interfaces/store-detail.interface';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  activeIndex: number = 1;
  quotation: IQuotation = {} as IQuotation;
  provinceSelected: IItemGroupSelected = {label: '', value: 0 } as IItemGroupSelected;
  
  formStore: IFormDetail = {} as IFormDetail;


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
    this.activeIndex = step;
  }

  setProvince(province: IItemGroupSelected){
    this.provinceSelected = province;
  }
  
}
