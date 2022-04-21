import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // for styling

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor="grey"
  }

}
