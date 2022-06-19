import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skeleton-subcategories',
  templateUrl: './card-skeleton-subcategories.component.html',
  styleUrls: ['./card-skeleton-subcategories.component.css']
})
export class CardSkeletonSubcategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
