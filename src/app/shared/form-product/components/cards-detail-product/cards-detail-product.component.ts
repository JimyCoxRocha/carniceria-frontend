import { Component, Input, OnInit } from '@angular/core';
import { DetailProduct } from 'src/app/core/interfaces';

@Component({
  selector: 'app-cards-detail-product',
  templateUrl: './cards-detail-product.component.html',
  styleUrls: ['./cards-detail-product.component.css']
})
export class CardsDetailProductComponent implements OnInit {

  @Input() detailsProduct : DetailProduct[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
