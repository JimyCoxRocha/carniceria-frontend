import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {SelectItemGroup, SelectItem} from 'primeng/api';
import { IProductCarStore } from '../../../../core/services';

interface ItemGroupSelected {
  label: string,
  value: number
}

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Output() buyProducts = new EventEmitter<Boolean>();
  @Input('_products') _products: IProductCarStore[] = [];

  province: number = 0;
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

  constructor(  ) { }

  ngOnInit(): void {
    
  }

  handleBuy(){
    console.log(this.province);
    this.buyProducts.emit(true);
  }

  get provinceSelected() : ItemGroupSelected{
    let city: ItemGroupSelected = { label: '', value: 2 }; //parametrizar precio mínimo
    
    const citySelected: ItemGroupSelected[] = this.groupedCities[0].items as ItemGroupSelected[];
       
      return citySelected.find(province => province.value === this.province) || city;
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
    return (this.subTotal + this.discount + this.provinceSelected.value);
  }

  selectITem(event: any){
    
  }
  
}
