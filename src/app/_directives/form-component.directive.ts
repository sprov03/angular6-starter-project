import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFormComponent]',
})
export class FormComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
