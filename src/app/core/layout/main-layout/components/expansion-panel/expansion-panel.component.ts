import { Component, Input, OnInit } from '@angular/core';

export interface ExpansionPanelInterface {
  id: number,
  title: string,
  description: string
}

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";
  @Input() icon: string = "";
  @Input() imageUrl: string = "";
  
  @Input() subItem: ExpansionPanelInterface[] = [];


  @Input() url: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
