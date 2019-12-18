import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // debugger;
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace('ipsum', '*****');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
