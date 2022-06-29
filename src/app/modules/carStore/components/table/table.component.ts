import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Product, ProductoResponse } from 'src/app/core/interfaces';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input('_products') _products: Product[] = [];
  @Input('isLoading') isLoading : boolean = true;
  @Output() deleteAll: EventEmitter<boolean> = new EventEmitter();
  @Output('removeProduct') _removeProduct: EventEmitter<number> = new EventEmitter();

  

  constructor(
    
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['_products']);
    /* if(changes['_products'] && changes['_products'].currentValue && changes['_products'].currentValue.length > 0){
      const product: Product[] = changes['_products'].currentValue as Product[];
       product.forEach(element => {
         this._productsTable.push({...element, amount: 1});
       });
    } */
 }

  ngOnInit(): void {
  }

  get products(){
    return this._products;
  }

  handleDeleteAll(){
    this.deleteAll.emit(true);
  }

  removeProduct(idProduct: number){
    this._removeProduct.emit(idProduct);
  }
  
  /* productCar(){
    return this.productsService.getProducts().subscribe((response)=>{
      //this.isOpenModal(response);
      this._products = response;
    });
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
  } */

}
