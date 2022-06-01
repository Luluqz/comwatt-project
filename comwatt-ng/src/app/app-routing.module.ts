import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './page/list/list.component';
import { DetailComponent } from './page/detail/detail.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
