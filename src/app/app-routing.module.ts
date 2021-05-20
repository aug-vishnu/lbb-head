import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';



const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full', },

  // Auth
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },


  // Admin-Panel
  {
    path: 'dashboard',
    component: DashboardNavComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardHomeComponent },

    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
