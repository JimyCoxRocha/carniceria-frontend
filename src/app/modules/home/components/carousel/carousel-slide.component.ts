import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationEntity } from '../../interfaces';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselSlideComponent implements OnInit {
  @Input() communications: CommunicationEntity[]= [];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  handleClickBtn(idTypeCommunication: Number, idCommunication: number){
    if(idTypeCommunication == 1)
      this.router.navigate(['productos', idCommunication]);
    else
      this.router.navigate(['promociones', idCommunication]);
  }

}
