import {NgModule} from '@angular/core';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
      MatSidenavModule,
      MatIconModule,
      MatTableModule,
      MatDialogModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      MatSelectModule,
    ],
    exports: [
      MatSidenavModule,
      MatIconModule,
      MatTableModule,
      MatDialogModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      MatSelectModule,
    ],
})
export class MaterialModule {
}
