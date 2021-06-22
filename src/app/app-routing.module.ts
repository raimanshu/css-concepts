import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'views',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path:'', redirectTo: 'views', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
