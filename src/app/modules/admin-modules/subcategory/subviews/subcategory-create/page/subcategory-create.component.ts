import { Component, OnInit } from '@angular/core';
import { Category, SubCategory } from 'src/app/core/interfaces';

@Component({
  selector: 'app-subcategory-create',
  templateUrl: './subcategory-create.component.html',
  styleUrls: ['./subcategory-create.component.css']
})
export class SubcategoryCreateComponent implements OnInit {

  subCategory : SubCategory = {} as SubCategory;
  selectedCategories : Category[] = [];
  isExistPhoto : boolean = false;
  isEdit : boolean = false;
  labelButton : string = "Crear"

  constructor() { }

  ngOnInit(): void {
  }

}
