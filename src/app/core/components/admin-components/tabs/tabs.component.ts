import { Component, Input, OnInit } from '@angular/core';
import { IAdminElementExtraDetail } from '../interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() detail!: IAdminElementExtraDetail;
  @Input() tabTitle!: string
  constructor() { }

  ngOnInit(): void {
    console.log(this.detail);
  }

}
