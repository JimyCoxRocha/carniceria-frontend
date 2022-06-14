import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-detail-skeleton',
  templateUrl: './header-detail-skeleton.component.html',
  styleUrls: ['./header-detail-skeleton.component.css']
})
export class HeaderDetailSkeletonComponent implements OnInit {
  @Input() background: string = '#BA8975';
  
  constructor() { }

  ngOnInit(): void {
  }

}
