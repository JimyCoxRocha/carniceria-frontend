import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() image = "";
  @Input() title = "";
  @Input() url = "";
  
  constructor(private primengConfig: PrimeNGConfig,
    private router: Router) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

  navLink(){
    this.router.navigate([this.url]);
  }
}
