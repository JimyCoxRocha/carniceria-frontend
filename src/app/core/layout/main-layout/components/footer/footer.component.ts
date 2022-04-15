import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialNetworks = [
    {
      title: "Facebook",
      url: "facebook.com",
      icon: "facebook_outlined"
    }
  ]
  @Input("categories") categories: Category[]  = [];

  constructor() { }

  ngOnInit(): void {
  }

}
