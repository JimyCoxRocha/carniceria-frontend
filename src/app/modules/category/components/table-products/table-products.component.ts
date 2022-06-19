import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductoResponse } from 'src/app/core/interfaces';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  @Input('_products') _products: ProductoResponse[] = [];
  @Input('isLoading')  isLoading : boolean;

  sortOptions: SelectItem[];
  emptyMessage : string;

  constructor() {
    this.isLoading = true;
    this.emptyMessage = "Sin registros";
    this.sortOptions = [
      {label: 'De mayor a menor', value: 'menor'},
      {label: 'De menor a mayor', value: 'mayor'}
    ];
   }

  ngOnInit(): void {
  }

  onSortChange($event : any){
    if($event.value == "mayor"){
      this._products = this._products.sort(this.sortProductForPriceHight);
    }else if($event.value == "menor"){
      this._products = this._products.sort(this.sortProductForPriceLow);
    }
  }

  sortProductForPriceHight(x : any,y : any){
    if(x.precio < y.precio) return -1;
    if(x.precio > y.precio) return 1;
    return 0;
  }

  sortProductForPriceLow(x : any,y : any){
    if(x.precio > y.precio) return -1;
    if(x.precio < y.precio) return 1;
    return 0;
  }
}
