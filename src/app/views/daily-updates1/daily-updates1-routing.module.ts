import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuIndexComponent } from './du-index/du-index.component';
import { PtrComponent } from './ptr/ptr.component';

const routes: Routes = [
  {
    path:'',
    component: DuIndexComponent
  },
  {
    path:'points-to-remember',
    component: PtrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyUpdates1RoutingModule { }
