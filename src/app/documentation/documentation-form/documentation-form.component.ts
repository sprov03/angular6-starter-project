import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormInterface} from '../../shared/modals/form.interface';

@Component({
  selector: 'app-documentation-form',
  templateUrl: './documentation-form.component.html',
  styles: []
})
export class DocumentationFormComponent implements OnInit, FormInterface{
  @Input()
  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }
}
