import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') highlite() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') cancel() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
