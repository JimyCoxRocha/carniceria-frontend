import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ExpansionPanelInterface } from '../components/expansion-panel/expansion-panel.component';
import { Category } from '../../../interfaces';
import { ProductsService, CategoriesService } from 'src/app/core/services';
import { categoryFormat } from '../interfaces/layout.interfaces';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import { BreakpointsService } from 'src/app/core/services/breakpoints.service';

interface City {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewChecked {
  categoriesAccordion: categoryFormat[] = [];
  categories: Category[] = [];
  display: boolean = false;
  _isLoadingCategory = true;

  items: MegaMenuItem[] = [];
  cities: City[] = [];
  selectedCity: City = { name: "New York", code: "NY" };
  
  selectedCitya(event: any){
    console.log("eve: ",event);
  }

  constructor(
      private categoriesService: CategoriesService,
      private productsService: ProductsService,
      private cdRef : ChangeDetectorRef,
      private bp: BreakpointsService,
    ) {

      this.cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" }
      ];

  }

  ngOnInit(): void {

    this.items = [];
    
    this.categoriesService.categories().subscribe(categories => {
      this.categories = categories;
      this._isLoadingCategory = false;
      this.items = categories.map(category => {
        return { 
          "label": category.titulo,
          "routerLink": "categoria/" + category.idCategoria
        }
      })
    });

    /* this.categoriesService.categories().subscribe(x => {
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
    }); */

  }

  get isLoading() {
    return this._isLoadingCategory;
  }

  breakpoint(point: string){
      return this.bp.breakpoint(point);
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
