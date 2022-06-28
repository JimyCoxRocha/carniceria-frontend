import { Component, OnInit } from '@angular/core';
import { Product, ProductoResponse } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';

interface productTable extends Product {
  amount: number
}

@Component({
  selector: 'app-car-store',
  templateUrl: './car-store.component.html',
  styleUrls: ['./car-store.component.css']
})
export class CarStoreComponent implements OnInit {
  _products: Product[] = [];
  _productsTable : productTable[] = [];
  _isLoading: boolean = false;
  
  constructor(private productsService: ProductsService) {
    this.productsService.getProductInCar();
  }

  ngOnInit(): void {
    if (this.productsService.getProductStorage().length > 0){
      this._isLoading = true;
      this.productCar();
    }
  }

  productCar(){
      this.productsService.getProducts().subscribe((response)=>{
        this._isLoading = false;
        response.forEach(element => {
          if(this.productsService.findProductStorage(element.product.idProducto))  
            this._productsTable.push({...element.product, amount: 1});
        });

      });
  }

  get productsTable(){
    return this._productsTable;
  }

  deleteAll(){
    this._products = [];
    this.productsService.removeAllProductStorage();
  }

  removeSelectedProduct(idProduct: number){
    this.productsService.removeProductStorage(idProduct);
    this._products = this.productsTable.filter(x => x.idProducto !== idProduct);
  }

  sendData(){
    console.log(this._productsTable);
  }

}
