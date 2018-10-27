import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: String;

  @Input('appHightlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  private setColor(color: String) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit() {
    this.setColor(this.highlightColor);
  }

}
