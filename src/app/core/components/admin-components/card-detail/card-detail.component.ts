import { Component, Input, OnInit } from '@angular/core';
import { ICardElementExtraDetail } from 'src/app/core/components/admin-components/interfaces';

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
