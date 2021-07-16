import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './content-card/content-card.component';


const comLists = [
  ContentCardComponent
];
@NgModule({
  declarations: [comLists],
  imports: [
    CommonModule,

  ],
  exports:[
    comLists
  ]
})
export class BasicComponentsModule { }
