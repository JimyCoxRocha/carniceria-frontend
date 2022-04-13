import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-image',
  templateUrl: './fixed-image.component.html',
  styleUrls: ['./fixed-image.component.css']
})
export class FixedImageComponent implements OnInit {
  @Input("title") title: string = "";
  @Input("url") url: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
