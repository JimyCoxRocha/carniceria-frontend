import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-product-main-detail',
  templateUrl: './skeleton-product-main-detail.component.html',
  styleUrls: ['./skeleton-product-main-detail.component.css']
})
export class SkeletonProductMainDetailComponent implements OnInit {

  @Input() isLoading : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
