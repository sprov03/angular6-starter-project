import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocumentationComponent} from './documentation.component';
import {SectionComponent} from './section/section.component';
import {TableComponent} from './table/table.component';
import {ModalComponent} from './modal/modal.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DocumentationComponent, children: [
      {path: 'sections', component: SectionComponent, data: {nav: 'sections'}},
      {path: 'tables', component: TableComponent, data: {nav: 'tables'}},
      {path: 'modals', component: ModalComponent, data: {nav: 'modals'}},
      {path: '**', component: DashboardComponent, data: {nav: 'default'}},
  ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentationRoutingModule {
}
