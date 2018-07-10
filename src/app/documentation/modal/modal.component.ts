import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {SimpleExampleModalComponent} from '../modals/simple-example-modal/simple-example-modal.component';
import {Hero} from '../../hero/shared/hero.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  private hero: Hero = {
    id: 55,
    name: 'Shawn'
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(SimpleExampleModalComponent, {
      data: this.hero
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }
}
