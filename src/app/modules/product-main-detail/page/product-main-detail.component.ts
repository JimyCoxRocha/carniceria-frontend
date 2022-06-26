import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-main-detail',
  templateUrl: './product-main-detail.component.html',
  styleUrls: ['./product-main-detail.component.css']
})
export class ProductMainDetailComponent implements OnInit {

  amountProduct : number = 0;

  
  constructor() { }

  ngOnInit(): void {
  }

}
