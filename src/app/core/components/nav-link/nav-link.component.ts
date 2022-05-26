import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent implements OnInit {
  @Input() title: string = "";
  @Input() urlNav: string = "";
  @Output() isClick = new EventEmitter<Boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isClick.emit(false);
  }

  navLink(){
    this.isClick.emit(true);
    this.router.navigate([this.urlNav]);
  }

}
