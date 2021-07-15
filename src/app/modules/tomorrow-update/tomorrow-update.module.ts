import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomorrowUpdateComponent } from './tomorrow-update/tomorrow-update.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: TomorrowUpdateComponent,
  },
];

@NgModule({
  declarations: [TomorrowUpdateComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TomorrowUpdateModule { }
