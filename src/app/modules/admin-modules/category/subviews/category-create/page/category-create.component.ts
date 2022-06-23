import { Component, OnInit } from '@angular/core';
import { Category, SubCategory } from 'src/app/core/interfaces';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category : Category = {} as Category;
  selectedSubCategories : SubCategory[] = [];
  isExistPhoto : boolean = false;
  isEdit : boolean = false;
  labelButton : string = "Crear"

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
