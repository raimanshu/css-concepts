import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyUpdates1RoutingModule } from './daily-updates1-routing.module';
import { DuIndexComponent } from './du-index/du-index.component';
import { PtrComponent } from './ptr/ptr.component';


@NgModule({
  declarations: [DuIndexComponent, PtrComponent],
  imports: [
    CommonModule,
    DailyUpdates1RoutingModule
  ]
})
export class DailyUpdates1Module { }
