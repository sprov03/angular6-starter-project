import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-example-form-modal',
  templateUrl: './example-form-modal.component.html',
  styles: []
})
export class ExampleFormModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ExampleFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public formGroup: FormGroup) {}

  ngOnInit() {
  }

  saveFormGroup() {
    console.log(this.formGroup.value);
    this.dialogRef.close(this.formGroup);
  }
}
