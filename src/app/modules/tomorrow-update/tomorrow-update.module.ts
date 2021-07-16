import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomorrowUpdateComponent } from './tomorrow-update/tomorrow-update.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentsModule } from "@basic-components/basic-components.module";


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
    RouterModule.forChild(routes),
    BasicComponentsModule
  ],
  exports: [RouterModule]
})
export class TomorrowUpdateModule { }
