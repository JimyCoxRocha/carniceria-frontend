import { Component, OnInit } from '@angular/core';
import { Product, ProductoResponse } from 'src/app/core/interfaces';
import { IProductsCar, ProductsService } from 'src/app/core/services';
import { ValidatorService } from 'src/app/core/services/validator.service';

export interface ICardProductTable extends Product {
  amount: number
}

@Component({
  selector: 'app-car-store',
  templateUrl: './car-store.component.html',
  styleUrls: ['./car-store.component.css']
})
export class CarStoreComponent implements OnInit {
  _products: Product[] = [];
  _productsTable : ICardProductTable[] = [];
  _isLoading: boolean = false;
  
  constructor(
    private productsService: ProductsService, 
    private validatorService: ValidatorService
  ) {
    this.productsService.getProductInCar();
  }

  ngOnInit(): void {
    if (this.productsService.getProductStorage().length > 0){
      this._isLoading = true;
      this.productCar();
    }
  }

  getRangeProducts(element: Product, productInStorage: IProductsCar){
    const productAmount = productInStorage.amount ? productInStorage.amount : 1;
    return this.validatorService.validateRange(productAmount, {
                max: element.stock,
                min: 1
    })
  }

  productCar(){
      this.productsService.getProducts().subscribe((response)=>{
        this._isLoading = false;
        response.forEach(element => {
          const productInStorage = this.productsService.findProductStorage(element.product.idProducto);
          if(productInStorage)  
            this._productsTable.push({...element.product, 
              amount: this.getRangeProducts(element.product, productInStorage)
            });
        });

      });
  }

  get productsTable(){
    return this._productsTable;
  }

  deleteAll(){
    this._productsTable = [];
    this.productsService.removeAllProductStorage();
  }

  removeSelectedProduct(idProduct: number){
    this.productsService.removeProductStorage(idProduct);
    this._productsTable = this.productsTable.filter(x => x.idProducto !== idProduct);
  }

  sendData(){
    console.log(this._productsTable);
  }
  
  updateProductInStorage(product: ICardProductTable){
    
    this.productsService.setProductStorage({
      amount: product.amount,
      id: product.idProducto
    });
  }

}
