import {Component, Inject, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styles: []
})
export class FormModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      formGroup: FormGroup,
      method: Function,
      formComponent: TemplateRef<any>
    }) {}

  ngOnInit() {
  }

  save() {
    console.log(this.data.formGroup.value);
    this.data.method(this.data.formGroup);
    this.dialogRef.close(this.data.formGroup);
  }
}
