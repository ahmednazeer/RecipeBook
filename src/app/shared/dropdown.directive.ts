import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding ('class.open') isOpen = false;
  constructor(private elementRef: ElementRef) { }
  /*@HostListener ('mouseup') DropDownClick( event: Event) {
    this.elementRef.nativeElement.class = 'close';
  }*/
  @HostListener ('click') toggleOpen( event: Event) {
    this.isOpen = !this.isOpen;
  }
}
