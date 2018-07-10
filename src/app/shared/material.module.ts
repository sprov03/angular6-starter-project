import {NgModule} from '@angular/core';
import {MatDialogModule, MatIconModule, MatSidenavModule, MatTableModule} from '@angular/material';

@NgModule({
    imports: [
      MatSidenavModule,
      MatIconModule,
      MatTableModule,
      MatDialogModule
    ],
    exports: [
      MatSidenavModule,
      MatIconModule,
      MatTableModule,
      MatDialogModule
    ],
})
export class MaterialModule {
}
