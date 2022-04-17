import { Component, Input, OnInit } from '@angular/core';
import { CommunicationEntity } from '../../interfaces';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselSlideComponent implements OnInit {
  @Input() communications: CommunicationEntity[]= [];

  
  constructor() { }

  ngOnInit(): void {
  }

}
