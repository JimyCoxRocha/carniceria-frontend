import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-error-primeng',
  templateUrl: './modal-error-primeng.component.html',
  styleUrls: ['./modal-error-primeng.component.css']
})
export class ModalErrorPrimengComponent implements OnInit {

  @Input() displayModal : boolean = false;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  redirectHome(){
    this.router.navigate(['/admin']);
  }
}
