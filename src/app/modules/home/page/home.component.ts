import { Component, OnInit } from '@angular/core';
import { ProductoResponse, Category } from 'src/app/core/interfaces';
import { CategoriesService, ProductsService } from 'src/app/core/services';
import { CommunicationService } from '../services/communication.service';

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


  get allProducts(): ProductoResponse[] {
    return this.productsService._products;
  }
  get communications() {
    return this.communicationService._comm;
  }

}
