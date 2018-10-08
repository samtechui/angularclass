import {Directive, HostBinding, HostListener} from '@angular/core';
import {style} from '@angular/animations';

@Directive({
  selector: '[appSampledirective]'
})
export class SampledirectiveDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundcolor:string='green';
  @HostListener('click') click() {
    this.backgroundcolor = 'yellow';
  }

}
