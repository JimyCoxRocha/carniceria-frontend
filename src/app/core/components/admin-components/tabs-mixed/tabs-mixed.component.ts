import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { IAdminElementExtraDetailMixed } from '../interfaces';

@Component({
  selector: 'app-tabs-mixed',
  templateUrl: './tabs-mixed.component.html',
  styleUrls: ['./tabs-mixed.component.css']
})
export class TabsMixedComponent implements OnInit {
  @Input() detail!: IAdminElementExtraDetailMixed;
  @Input() activated!: boolean;


  selectedTabIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("activo");
  }

}
