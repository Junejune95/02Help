import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContentComponent } from 'src/app/modules/create-content/create-content.component';
import { ErrorFoundComponent } from 'src/app/modules/error-found/error-found.component';
import { HeaderNavComponent } from 'src/app/modules/header-nav/header-nav.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { TomorrowUpdateModule } from "src/app/modules/tomorrow-update/tomorrow-update.module";
const routes: Routes = [
  {
    path: 'create-content',
    component: CreateContentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'O2Help',
    component: HeaderNavComponent,
    children:[
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('src/app/modules/home/home.module')
        .then(m => m.HomeModule),
      },
      {
        path: 'tomorrow-update',
        loadChildren: () => import('src/app/modules/tomorrow-update/tomorrow-update.module')
        .then(m => m.TomorrowUpdateModule),
      },
      {
        path: 'daily',
        loadChildren: () => import('src/app/modules/daily/daily.module')
        .then(m => m.DailyModule),
      },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full', },
  { path: '**', component: ErrorFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
