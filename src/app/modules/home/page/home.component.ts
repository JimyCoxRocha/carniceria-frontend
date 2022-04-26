import { Component, OnInit } from '@angular/core';
import { ProductoResponseEntity } from 'src/app/core/interfaces/common/ProductEntity';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { IProductsCar, ProductsService } from '../../../core/services/products.service';
import { CommunicationService } from '../services/communication.service';
import { Category } from '../../../core/interfaces/common/Categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = "categoria/";
  categories : Category[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private communicationService: CommunicationService,
  ) { }
  
  ngOnInit(): void {
    this.categoriesService.categories().subscribe(x => {this.categories = x;});
    this.productsService.getProducts();
    this.communicationService.getCommunications();
  }


  get allProducts(): ProductoResponseEntity[] {
    return this.productsService._products;
  }
  get communications() {
    return this.communicationService._comm;
  }

}
