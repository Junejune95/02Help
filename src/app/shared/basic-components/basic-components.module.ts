import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentsListComponent } from './contents-list/contents-list.component';
import { NgSelectModule } from '@ng-select/ng-select';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const comLists = [
  ContentCardComponent,
  ContentsListComponent
];
@NgModule({
  declarations: [comLists],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    comLists
  ]
})
export class BasicComponentsModule { }
