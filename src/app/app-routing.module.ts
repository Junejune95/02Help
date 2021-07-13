import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContentComponent } from 'src/app/modules/create-content/create-content.component';
import { ErrorFoundComponent } from 'src/app/modules/error-found/error-found.component';

const routes: Routes = [
  {
    path: 'create-content',
    component: CreateContentComponent,
  },
  { path: '', redirectTo: '/create-content', pathMatch: 'full', },
  { path: '**', component: ErrorFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
