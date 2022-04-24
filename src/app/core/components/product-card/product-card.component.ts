import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProductsCar } from '../../services/products.service';

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
 
  @Output() handleAmountProductCar = new EventEmitter<IProductsCar>();
  @Output() removeProductCar = new EventEmitter<number>();

  isCarItem: boolean = false;
  counter: number = 1;
  totalPriceCard: number = 0;
  constructor() { 
  }

  ngOnInit(): void {
    this.totalPriceCard = this.price;
  }

  counterResult(counter: number){
    this.totalPriceCard = counter * this.price;
    this.counter = counter;
    this.isCarItem && this.amountProduct(counter);
  }

  amountProduct(amount: number){
    this.handleAmountProductCar.emit(
      {amount,id : this.id}
    )
  }
  removeSelectedProduct(){

  }
  handleAddToCar(){
    this.isCarItem = !this.isCarItem;
    this.isCarItem ? this.amountProduct(this.counter) : console.log("remover");
  }
}
