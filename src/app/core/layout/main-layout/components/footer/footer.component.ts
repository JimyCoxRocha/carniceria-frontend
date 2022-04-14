import { Component, Input, OnInit } from '@angular/core';

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
  @Input("categories") categories = ["hola", "Todos", "Chau"];

  constructor() { }

  ngOnInit(): void {
  }

}
