import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {SelectItemGroup, SelectItem} from 'primeng/api';
import { IProductCarStore } from '../../../../core/services';


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Output() buyProducts = new EventEmitter<Boolean>();
  @Input('_products') _products: IProductCarStore[] = [];


  constructor(  ) { }

  ngOnInit(): void {
    
  }

  handleBuy(){
    this.buyProducts.emit(true);
  }

  get discount(){
    const discount = 0;
    return discount;
  }

  get subTotal(){
    let subTotal = 0;
    this._products.map(product => {
      subTotal += (product.amount * product.precio);
    });
    return subTotal;
  }

  get total(){
    return (this.subTotal - this.discount);
  }

  selectITem(event: any){
    
  }
  
}
