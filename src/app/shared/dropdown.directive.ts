import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  toggleDropdown(event: Event) {
    this.isOpen = !this.isOpen;
  }
}
