import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateContentComponent } from '@modules/create-content/create-content.component';
import { ErrorFoundComponent } from '@modules/error-found/error-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from '@modules/login/login.component';
import { HeaderNavComponent } from '@modules/header-nav/header-nav.component';
import { SpinnerLoadingComponent } from './modules/spinner-loading/spinner-loading.component';
import { GlobalErrorHandler } from '@app/core/global/global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CreateContentComponent,
    ErrorFoundComponent,
    LoginComponent,
    HeaderNavComponent,
    SpinnerLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [
    AppComponent,
 
  ]
})
export class AppModule { }
