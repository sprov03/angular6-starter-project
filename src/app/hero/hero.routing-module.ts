import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from './hero.component';
import {HeroListComponent} from './hero-list/hero-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: HeroComponent},
      {path: 'list', component: HeroListComponent},
      {path: '**', component: HeroComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {
}
