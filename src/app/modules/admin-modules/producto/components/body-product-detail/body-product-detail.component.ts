import { Component, Input, OnInit } from '@angular/core';
import { Category, DetailProduct } from 'src/app/core/interfaces';

@Component({
  selector: 'app-body-product-detail',
  templateUrl: './body-product-detail.component.html',
  styleUrls: ['./body-product-detail.component.css']
})
export class BodyProductDetailComponent implements OnInit {

  @Input() productDetail : DetailProduct[] = [];
  @Input() productCategory : Category[] = [];
  @Input() categorySelected : Category = {} as Category;
  @Input() isLoading : boolean = true;

  urlImageNotFound : string = "../../../../assets/images/not_found.png";
  asd : string = "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(event : any){
    let idCategory = event.path[2].attributes[3].ownerElement.id;
    this.productCategory.filter( x => x.idCategoria == idCategory);
  }
}
