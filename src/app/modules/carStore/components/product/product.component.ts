import { Component, Input, OnInit } from '@angular/core';
import { IProductCarStore, ProductsService } from 'src/app/core/services';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: IProductCarStore;

  isCarItem: boolean = false;
  counter: number = 1;
  initialAmount: number = 1;
  totalPriceCard: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  counterResult(counter: number){
    this.totalPriceCard = counter * this.product.precio;
    this.counter = counter;
    this.isCarItem && this.amountProduct(counter);
  }

  amountProduct(amount: number){
    this.productsService.setProductStorage({
      amount,
      id:  this.product.idProducto
    });

  }
  removeSelectedProduct(){
    this.productsService.removeProductStorage(this.product.idProducto);
  }

  handleAddToCar(){
    this.isCarItem = !this.isCarItem;
    this.isCarItem ? this.amountProduct(this.counter) : this.removeSelectedProduct();
  }

}
