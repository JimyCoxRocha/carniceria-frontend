import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() imgUrl: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() stock: number = 0;

  @Input() minimaUnidad: string = "";
  @Input() unidadMedida: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
