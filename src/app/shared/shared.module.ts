import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModalComponent} from './modals/form-modal/form-modal.component';
import {DocumentationFormComponent} from '../documentation/documentation-form/documentation-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormModalComponent,
  ],
  entryComponents: [
    FormModalComponent
  ]
})
export class SharedModule { }
