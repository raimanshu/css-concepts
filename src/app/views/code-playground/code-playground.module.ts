import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodePlaygroundRoutingModule } from './code-playground-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    CodePlaygroundRoutingModule
  ]
})
export class CodePlaygroundModule { }
