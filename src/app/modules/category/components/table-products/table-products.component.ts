import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Product, ProductoResponse } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit, OnChanges {

  @Input('_products') _products: Product[] = [];
  @Input('isLoading')  isLoading : boolean;

  sortOptions: SelectItem[];
  emptyMessage : string;
  isCarItem: number[] = [];

  constructor(
    private router : Router,
    private productsService: ProductsService
  ) {
    this.isLoading = true;
    this.emptyMessage = "Sin registros";
    this.sortOptions = [
      {label: 'De mayor a menor', value: 'menor'},
      {label: 'De menor a mayor', value: 'mayor'}
    ];
   }

   ngOnChanges(changes: SimpleChanges) {
     if(changes['_products'] && changes['_products'].currentValue && changes['_products'].currentValue.length > 0){
        const product: Product[] = changes['_products'].currentValue as Product[];
        product.forEach(element => {
          if(this.productsService.findProductStorage(element.idProducto))
            this.isCarItem.push(element.idProducto)
        });
     }
  }

  ngOnInit(): void {
    this._products.forEach(element => {
      if(this.productsService.findProductStorage(element.idProducto))
        this.isCarItem.push(element.idProducto);
    });
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

  viewDetailProduct(product : Product){
    const id = product.idProducto;

    this.router.navigate([`/detail-product/${id}`]);
  }

  handleAddToCar(idProduct: number){
    !this.productExistInCar(idProduct)
    ? this.addProductCar(idProduct)
    : this.removeSelectedProduct(idProduct);
  }

  productExistInCar(idProduct: number){
    return this.isCarItem.findIndex(x => x == idProduct) >= 0;
  }

  removeSelectedProduct(idProduct: number){
    this.productsService.removeProductStorage(idProduct);
    this.isCarItem = this.isCarItem.filter(x => x !== idProduct);
  }

  addProductCar(idProduct: number){
    this.productsService.setProductStorage({
      amount: 1,
      id: idProduct
    });
    this.isCarItem.push(idProduct);
  }
}
