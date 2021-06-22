import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlIndexComponent } from './pl-index/pl-index.component';

const routes: Routes = [
  {
    path: '',
    component: PlIndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyListRoutingModule { }
