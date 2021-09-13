import { Directive, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[rmColor]'
})
export class RmColorDirective implements OnInit {

  @HostBinding('style.background') get getStyle()
  {
    return this.currentColor;
  }

  @Input() rmColor: string = '';

  currentColor: string = '';


  ngOnInit(): void
  {
    this.setStyle();
  }

  setStyle()
  {
    this.currentColor = this.rmColor;
  }



}
