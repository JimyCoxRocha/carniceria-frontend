import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ExpansionPanelInterface } from '../components/expansion-panel/expansion-panel.component';
import { Category } from '../../../interfaces';
import { ProductsService, CategoriesService } from 'src/app/core/services';
import { categoryFormat } from '../interfaces/layout.interfaces';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import { BreakpointsService } from 'src/app/core/services/breakpoints.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewChecked {
  categoriesAccordion: categoryFormat[] = [];
  categories: Category[] = [];
  display: boolean = false;

  items: MegaMenuItem[] = [];

  constructor(
      private categoriesService: CategoriesService,
      private productsService: ProductsService,
      private cdRef : ChangeDetectorRef,
      private bp: BreakpointsService
    ) {
  }

  ngOnInit(): void {

    this.items = [];
    
    this.categoriesService.categories().subscribe(categories => {
      this.items = categories.map(category => {
        return { 
          "label": category.titulo,
          "routerLink": "categoria/1"
        }
      })
      console.log(this.items);
    });

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

  brakpoint(point: string){
    return this.bp.breakpoint(point)
  }

}
