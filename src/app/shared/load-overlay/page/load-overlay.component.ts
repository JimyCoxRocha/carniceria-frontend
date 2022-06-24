import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-load-overlay',
  templateUrl: './load-overlay.component.html',
  styleUrls: ['./load-overlay.component.css']
})
export class LoadOverlayComponent implements OnInit {

  @Input() isLoadingOverlay : boolean = true;
  @Input() displayOverlay : boolean = false;
  @Input() labelOverlay : string = "";
  @Input() iconOverlay : string = "";
  @Input() url : string = "";
  @Input() tittleOverlay = "";

  constructor(
    private primengConfig: PrimeNGConfig,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  redirectCategory(){
    this._router.navigate([`${this.url}`]);
  }
}
