import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[textFormat]'
})
export class TextFormatDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click') onBlur() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }


}
