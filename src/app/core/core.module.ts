import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from './core.routing-module';
import { ShellComponent } from './shell/shell.component';
import {MaterialModule} from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreRoutingModule,
  ],
  exports: [
    CoreRoutingModule,
  ],
  declarations: [
    ShellComponent
  ]
})
export class CoreModule { }
