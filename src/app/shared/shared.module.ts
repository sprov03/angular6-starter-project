import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModalComponent} from './modals/form-modal/form-modal.component';
import {DocumentationFormComponent} from '../documentation/documentation-form/documentation-form.component';
import {FormComponentDirective} from '../_directives/form-component.directive';
import {ButtonComponent} from './ux/button/button.component';
import {ButtonActionDirective} from '../_directives/button-action.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Directives
    ButtonActionDirective,

    // Components
    FormModalComponent,
    ButtonComponent,

    // Directives
    FormComponentDirective,
  ],
  entryComponents: [
    FormModalComponent,
    DocumentationFormComponent,
  ]
})
export class SharedModule { }
