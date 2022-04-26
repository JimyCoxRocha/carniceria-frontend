import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ExpansionPanelInterface } from '../components/expansion-panel/expansion-panel.component';
import { Category, SubCategory } from '../../../interfaces/common/Categories';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

interface categoryFormat{
  category: Category,
  subItem: ExpansionPanelInterface[]
}
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewChecked {
  categoriesAccordion: categoryFormat[] = [];
  categories: Category[] = [];

  constructor(
      private categoriesService: CategoriesService,
      private productsService: ProductsService,
      private cdRef : ChangeDetectorRef
    ) {
  }

  ngOnInit(): void {
    this.categoriesService.categories().subscribe(x => { 
      this.categories = x;
      x.map(v => {
        this.categoriesAccordion = 
        [...this.categoriesAccordion,
          { 
            subItem: this.SubCategoriesFormat(v),
            category: v
          }
        ]
      })
    });

  }

  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }

  get productsInCar(){
    return this.productsService._productsCar.length || 0;
  }

  SubCategoriesFormat( category: Category ){
    const subItem: ExpansionPanelInterface[] = 
    category.subCategoria.map(resp => ({
        id: resp.idSubcategoria,
        title: resp.titulo,
        description: ""
      })
    )
    return subItem;
  }
}
