import { Component, OnInit } from '@angular/core';
import { ProductoResponse, Category } from 'src/app/core/interfaces';
import { CategoriesService, ProductsService } from 'src/app/core/services';
import { ICarouselCommunication } from '../interfaces';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = "categoria/";
  categories : Category[] = [];
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];

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
    const data: ICarouselCommunication[] = this.communicationService
              ._comm.map(com => ({
                  communcation: com,
                  alt: com.titulo,
                  previewImageSrc: com.urlImage,
                  thumbnailImageSrc: com.urlImage,
                  title: com.titulo
              }));
    return data;
  }

}
