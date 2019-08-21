import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective implements OnInit {
  private el: ElementRef;
  @Input() c = 'bule';
  @Input() bg = '#eef';

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.c;
    this.el.nativeElement.style.backgroundColor = this.bg;
  }

}
