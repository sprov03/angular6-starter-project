import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShellComponent} from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'documentation',
        // canActivate: [AuthGuardService],
        data: {},
        loadChildren: '../documentation/documentation.module#DocumentationModule'
      },
      {
        path: 'heroes',
        // canActivate: [AuthGuardService],
        data: {},
        loadChildren: '../hero/hero.module#HeroModule'
      },
      // {
      //   path: 'heroes',
      //   component: HeroComponent
      // }
      // {
      //   path: 'form',
      //   loadChildren: '../form/form.module#FormModule'
      // },
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      // {
      //   path: '**',
      //   component: NotFoundComponent
      // }
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
