import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProductsCar, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() id!: number;

  @Input() imgUrl: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() stock: number = 0;
  @Input() price: number = 0;

  @Input() minimaUnidad: string = "";
  @Input() unidadMedida: string = "";

  isCarItem: boolean = false;
  counter: number = 1;
  initialAmount: number = 1;
  totalPriceCard: number = 0;
  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.totalPriceCard = this.price;
    const productStorage = this.productsService.findProductStorage(this.id);
    if(productStorage){
      
      this.isCarItem = true;
      this.initialAmount = productStorage.amount;
    }
  }

  counterResult(counter: number){
    //this.totalPriceCard = counter * this.price;
    //this.counter = counter;
    //this.isCarItem && this.amountProduct(counter);
  }

  amountProduct(amount: number){
    this.productsService.setProductStorage({
      amount,
      id: this.id
    });
  }
  removeSelectedProduct(){
    this.productsService.removeProductStorage(this.id);
  }

  handleAddToCar(){
    this.isCarItem = !this.isCarItem;
    //this.amountProduct(this.counter);
    this.isCarItem ? this.amountProduct(this.counter) : this.removeSelectedProduct();
  }
}
