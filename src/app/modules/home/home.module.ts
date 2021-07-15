import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule]
})


export class HomeModule { }
