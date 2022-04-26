import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-car-store',
  templateUrl: './car-store.component.html',
  styleUrls: ['./car-store.component.css']
})
export class CarStoreComponent implements OnInit {
  constructor(private productsService: ProductsService) { 
    console.log(this.productsService._products);
    this.productsService.getProductInCar();
  }

  ngOnInit(): void {/* 
    this.filterProductsInStorage(); */
  }

  get productsInCar(){
    return this.productsService._productsInCar;
  }
}
