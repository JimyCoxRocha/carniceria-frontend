import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointsService } from 'src/app/core/services/breakpoints.service';
import { Communication, ICarouselCommunication, ICarouselImage } from '../../interfaces';


@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselSlideComponent implements OnInit {
  @Input() communications: ICarouselCommunication[]= [];

  responsiveOptions:any[] = [
    {
      breakpoint: '2024px',
      numVisible: 7
    },
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  constructor(private router: Router, private bp: BreakpointsService) { }

  ngOnInit(): void {}

  get images(){
    return this.communications;
  }

  brakpoint(point: string){
    return this.bp.breakpoint(point)
  }
  
  handleClickBtn(url: string){
    this.router.navigate([url]);
    /* if(idTypeCommunication == 1)
      this.router.navigate(['producto', idCommunication]);
    else
      this.router.navigate(['promociones', idCommunication]); */
  }

}
