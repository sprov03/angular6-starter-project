import {Component, ComponentFactoryResolver, ComponentRef, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormComponentDirective} from '../../../_directives/form-component.directive';
import {FormComponent} from '../form-component';
import {ButtonComponent, ButtonState} from '../../ux/button/button.component';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styles: []
})
export class FormModalComponent implements OnInit {
  @ViewChild('saveButton') saveButton: ComponentRef<ButtonComponent>;
  @ViewChild(FormComponentDirective) formComponentTemplateRef: FormComponentDirective;
  private formComponent: FormComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      formGroup: FormGroup,
      saveMethod: Function,
      cancelMethod: Function,
      formComponent: FormComponent
    }) {}

  ngOnInit() {
    // resolve Component
    const resolvedFormComponentRef = this.componentFactoryResolver.resolveComponentFactory(this.data.formComponent);
    // inject resolved component into template and get the instance
    this.formComponent = <FormComponent> this.formComponentTemplateRef.viewContainerRef.createComponent(resolvedFormComponentRef).instance;
    // inject required data into the component
    this.formComponent.formGroup = this.data.formGroup;
  }

  save() {
    this.data.saveMethod(this.data.formGroup);
    this.dialogRef.close(this.data.formGroup);
  }

  cancel() {
    this.data.cancelMethod(this.data.formGroup);
    this.dialogRef.close();
  }
}
