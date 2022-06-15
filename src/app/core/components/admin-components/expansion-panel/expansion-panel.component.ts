import { Component, Input, OnInit } from '@angular/core';
import { IAdminElementExtraDetail } from '../interfaces';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  @Input() detail!: IAdminElementExtraDetail;

  constructor() { }

  ngOnInit(): void {
  }


}