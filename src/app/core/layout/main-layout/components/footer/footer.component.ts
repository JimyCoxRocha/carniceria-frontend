import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleCategoryClick(category: Category){
    this.route.navigate(['categoria', category.idCategoria])
  }
}
