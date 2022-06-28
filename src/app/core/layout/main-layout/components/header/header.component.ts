import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProductsService } from 'src/app/core/services';
import { BreakpointsService } from 'src/app/core/services/breakpoints.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  md: boolean = false;
  value3: string = "";
  display: boolean = false;
  
  constructor(private router: Router, 
    private bp: BreakpointsService,
    private auth: AuthService,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
  }
  
  brakpoint(point: string){
    return this.bp.breakpoint(point)
  }

  handleUrl(){
    this.router.navigateByUrl("carrito");
  }

  get isAuthUser(){
    return this.auth.isAuthUser();
  }

  get productsInCar(){
    return `${this.productsService._productsCar.length}`;
  }

  get isAdminUser(){
    return this.auth.isAdminUser();
  }
  
  handleUser(){
    this.isAuthUser
      ? this.router.navigate(['/'])
      : this.router.navigate(['/auth/login'])
  }
}
