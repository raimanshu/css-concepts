import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmmetComponent } from './emmet/emmet.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'property-list',
    loadChildren:  () => import('./property-list/property-list.module').then(m => m.PropertyListModule)
  },
  {
    path: 'daily-updates1',
    loadChildren:  () => import('./daily-updates1/daily-updates1.module').then(m => m.DailyUpdates1Module)
  },
  {
    path: 'code-playground',
    loadChildren:  () => import('./code-playground/code-playground.module').then(m => m.CodePlaygroundModule)
  },
  {
    path: 'emmet',
    component: EmmetComponent
  },
  {
    path: 'references',
    component: ReferencesComponent
  },
  {
    path: 'cheatsheets',
    component: CheatsheetsComponent
  },
  {
    path:'', redirectTo: 'dashboard', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
