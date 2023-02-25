import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { ProjetComponent } from './component/projet/projet.component';

const routes: Routes = [
  { path: '', redirectTo: '/projets', pathMatch: 'full' },
  { path: 'projets', component: IndexComponent },
  { path: 'projet/:id', component: ProjetComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
