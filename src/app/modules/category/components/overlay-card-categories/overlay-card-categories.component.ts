import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-card-categories',
  templateUrl: './overlay-card-categories.component.html',
  styleUrls: ['./overlay-card-categories.component.css']
})
export class OverlayCardCategoriesComponent implements OnInit {

  @Input('isLoadingCategories') isLoadingCategories: boolean;

  constructor() {
    this.isLoadingCategories = true;
   }

  ngOnInit(): void {
  }

}
