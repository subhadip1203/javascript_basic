import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomedesign]'
})
export class CustomedesignDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'red'
  }  // added el: ElementRef

}
