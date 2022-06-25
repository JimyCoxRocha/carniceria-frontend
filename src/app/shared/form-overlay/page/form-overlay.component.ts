import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrls: ['./form-overlay.component.css']
})
export class FormOverlayComponent implements OnInit {

  @Input() isLoading : boolean = false;

  textOverlay : string = "cargando información";

  constructor() { }

  ngOnInit(): void {
  }

}
