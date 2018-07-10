import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HeroRoutingModule} from './hero.routing-module';
import {HeroComponent} from './hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HeroRoutingModule,
  ],
  exports: [
    HeroRoutingModule,
  ],
  declarations: [
    HeroComponent,
    HeroListComponent,
  ]
})

export class HeroModule {
}
