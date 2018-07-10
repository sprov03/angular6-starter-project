import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Hero} from '../../../hero/shared/hero.model';

@Component({
  selector: 'app-simple-example-modal',
  templateUrl: './simple-example-modal.component.html',
  styles: []
})
export class SimpleExampleModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SimpleExampleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Hero) {}

  ngOnInit() {
  }
}
