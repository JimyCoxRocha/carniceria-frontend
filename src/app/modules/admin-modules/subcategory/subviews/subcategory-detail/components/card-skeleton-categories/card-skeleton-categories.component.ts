import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skeleton-categories',
  templateUrl: './card-skeleton-categories.component.html',
  styleUrls: ['./card-skeleton-categories.component.css']
})
export class CardSkeletonCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
