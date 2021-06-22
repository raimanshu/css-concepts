import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyListRoutingModule } from './property-list-routing.module';
import { PlIndexComponent } from './pl-index/pl-index.component';


@NgModule({
  declarations: [PlIndexComponent],
  imports: [
    CommonModule,
    PropertyListRoutingModule
  ]
})
export class PropertyListModule { }
