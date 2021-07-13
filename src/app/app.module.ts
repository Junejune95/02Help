import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateContentComponent } from './modules/create-content/create-content.component';
import { ErrorFoundComponent } from './modules/error-found/error-found.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    CreateContentComponent,
    ErrorFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // CommonModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
 
  ]
})
export class AppModule { }
