import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-error-prime-ng',
  templateUrl: './modal-error-prime-ng.component.html',
  styleUrls: ['./modal-error-prime-ng.component.css']
})
export class ModalErrorPrimeNGComponent implements OnInit {

  @Input() displayModal : boolean;

  constructor() { 
    this.displayModal = false
  }

  ngOnInit(): void {
  }

}
