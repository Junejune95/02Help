import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContentComponent } from '@modules/create-content/create-content.component';
import { ErrorFoundComponent } from '@modules/error-found/error-found.component';
import { HeaderNavComponent } from '@modules/header-nav/header-nav.component';
import { LoginComponent } from '@modules/login/login.component';
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
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('@modules/home/home.module')
          .then(m => m.HomeModule),
      },
      {
        path: 'tomorrow-update',
        loadChildren: () => import('@modules/tomorrow-update/tomorrow-update.module')
          .then(m => m.TomorrowUpdateModule),
      },
      {
        path: 'daily',
        loadChildren: () => import('@modules/daily/daily.module')
          .then(m => m.DailyModule),
      },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full', },
  { path: '**', component: ErrorFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
