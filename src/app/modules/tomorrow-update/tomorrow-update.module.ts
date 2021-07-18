import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomorrowUpdateComponent } from './tomorrow-update/tomorrow-update.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentsModule } from "@basic-components/basic-components.module";


const routes: Routes = [
  {
    path: 'Oxygen',
    component: TomorrowUpdateComponent,
  },
  {
    path: 'Flowmeter',
    component: TomorrowUpdateComponent,
  },
  {
    path: 'Oximeter',
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
