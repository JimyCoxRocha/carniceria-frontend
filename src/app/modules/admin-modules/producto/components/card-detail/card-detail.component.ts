import { Component, Input, OnInit } from '@angular/core';
import { ICardElementExtraDetail } from '../../interfaces/product-detail.interface';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() content!: ICardElementExtraDetail;
  
  constructor() { }

  ngOnInit(): void {
  }

}
