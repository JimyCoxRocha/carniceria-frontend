import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent implements OnInit {
  @Input() title: string = "";
  @Input() urlNav: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navLink(){
    this.router.navigate(['/', this.urlNav]);
  }

}
