import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {

  _breakpoint: string[] = ["sm"];

  addOnlyElement( element: string ){
    const point = this._breakpoint.find((item) => item === element);

    if(point === undefined){
      this._breakpoint.push(element);
    }
  }


  deleteAElement( element: string ){
    this._breakpoint = this._breakpoint.filter((item) => item !== element)
  }

  constructor(public breakpointObserver: BreakpointObserver) {

    this.breakpointObserver
    .observe(['(min-width: 576px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.addOnlyElement("sm");
      }else{
        this.deleteAElement("sm");
      }
    });

    this.breakpointObserver
    .observe(['(min-width: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.addOnlyElement("md");
      }else{
        this.deleteAElement("md");
      }
    });

    this.breakpointObserver
    .observe(['(min-width: 992px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.addOnlyElement("lg");
      }else{
        this.deleteAElement("lg");
      }
    });

    this.breakpointObserver
    .observe(['(min-width: 1200px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.addOnlyElement("xl");
      }else{
        this.deleteAElement("xl");
      }
    });

    this.breakpointObserver
    .observe(['(min-width: 1400px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.addOnlyElement("xxl");
      }else{
        this.deleteAElement("xxl");
      }
    });

   }

   
   breakpoint(point: string ){
    const element = this._breakpoint.find(x => x === point)
    if(element)
      return true;
    
    return false;

   }

}
