import {Component,  Input, OnInit} from '@angular/core';
import {ButtonLabels} from './button-labels';
import {ButtonAction} from './button-action';
import {ButtonState} from './button-state';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {
  label: string;
  classes: string;

  @Input()
  private labels?: ButtonLabels;
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

  constructor() { }

  ngOnInit() {
    this.setState(ButtonState.Ready);
  }

  private setState(state: ButtonState) {
    this.state = state;
    this.setLabel();
    this.setClasses();
  }

  private setLabel() {
    if (this.labels) {
      this.label = this.labels[this.state];

      return;
    }

    this.label = this.defaultLabels[this.action][this.state];
  }

  private setClasses() {
    this.classes = this.defaultClasses[this.action][this.state];
  }

  clicked() {
    if (this.state === ButtonState.Ready) {
      return this.setState(ButtonState.Pending);
    }

    if (this.state === ButtonState.Pending) {
      return this.setState(ButtonState.Error);
    }

    if (this.state === ButtonState.Error) {
      return this.setState(ButtonState.Success);
    }

    if (this.state === ButtonState.Success) {
      return this.setState(ButtonState.Ready);
    }
  }
}
