import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DocumentationRoutingModule} from './documentation.routing-module';
import {DocumentationComponent} from './documentation.component';
import { SectionComponent } from './section/section.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { SimpleExampleModalComponent } from './modals/simple-example-modal/simple-example-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    DocumentationRoutingModule,
  ],
  exports: [
    DocumentationRoutingModule,
  ],
  declarations: [
    DocumentationComponent,
    SectionComponent,
    TableComponent,
    ModalComponent,
    SimpleExampleModalComponent,
    DashboardComponent,
  ],
  entryComponents: [
    SimpleExampleModalComponent,
  ]
})
export class DocumentationModule {
}
