import {Directive, ElementRef, Input, Renderer, Renderer2} from '@angular/core';
import {ButtonAction} from '../shared/ux/button/button-action';
import {ButtonState} from '../shared/ux/button/button-state';
import {Renderer3} from '@angular/core/src/render3/interfaces/renderer';

@Directive({
  selector: '[appButtonAction]'
})
export class ButtonActionDirective {
  label: string;
  classes: string;

  // @Input()
  // private labels?: ButtonLabels;
  @Input()
  private action: ButtonAction;
  private state: ButtonState;
  private defaultLabels = {
    save: {
      ready: 'Save',
      pending: 'Saving...',
      error: 'Error Saving',
      success: 'Saved Successfully'
    },
    delete: {
      ready: 'Delete',
      pending: 'Deleting...',
      error: 'Error Deleting',
      success: 'Deleted Successfully'
    }
  };
  private defaultClasses = {
    save: {
      ready: 'btn btn-dark ml-2',
      pending: 'btn btn-warning ml-2 disabled',
      error: 'btn btn-danger ml-2 disabled',
      success: 'btn btn-success ml-2 disabled'
    },
    delete: {
      ready: 'btn btn-danger ml-2',
      pending: 'btn btn-warning ml-2',
      error: 'btn btn-danger ml-2',
      success: 'btn btn-success ml-2'
    },
  };

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'background', 'pink');

    (<HTMLButtonElement> elementRef.nativeElement);
      // console.log(event.target);
      //
      // event.stopPropagation();
  }
}
