import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SimpleExampleModalComponent} from '../modals/simple-example-modal/simple-example-modal.component';
import {Hero} from '../../hero/shared/hero.model';
import {ExampleFormModalComponent} from '../modals/example-form-modal/example-form-modal.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormModalComponent} from '../../shared/modals/form-modal/form-modal.component';
import {DocumentationFormComponent} from '../documentation-form/documentation-form.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {}

  private hero: Hero = {
    id: 55,
    name: 'Shawn'
  };

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SimpleExampleModalComponent, {
      data: this.hero
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with Result: ', result);
    });
  }

  openFormModal() {
    const dialogRef = this.dialog.open(ExampleFormModalComponent, {
      data: this.formBuilder.group({
          'id': [this.hero.name, []],
          'name': [this.hero.name, []],
        })
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with Result: ', result);
    });
  }

  openAppFormModal() {
    this.dialog.open(FormModalComponent, {
      data: {
        title: 'Testing Form Modal Title',
        formComponent: DocumentationFormComponent,
        saveMethod: this.savedMethod,
        cancelMethod: this.savedMethod,
        formGroup: this.formBuilder.group({
          'id': [this.hero.id, []],
          'name': [this.hero.name, []],
        })
      }
    });
  }

  savedMethod(formGroup: FormGroup) {
    console.log(formGroup);
    console.log(formGroup.valid);
    console.log('Saved Method was Called!!!');
  }
}
