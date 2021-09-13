import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * @Import Component page
 */
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PublicComponent } from './pages/public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    loadChildren: () => import('./views/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
