import { PublishingPagesComponent } from './pages/publishing-pages/publishing-pages.component';
import { KeywordResultComponent } from './pages/keyword-result/keyword-result.component';
import { KeywordPageComponent } from './pages/keyword-page/keyword-page.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { KeywordSelectionComponent } from './pages/keyword-selection/keyword-selection.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { PaymentPersonalInfoComponent } from './pages/payment-personal-info/payment-personal-info.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { PaymentCardInfoComponent } from './pages/payment-card-info/payment-card-info.component';



const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full', },

  // Auth
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'on-boarding', component: OnboardingComponent },

  { path: 'keyword-selection', component: KeywordSelectionComponent },

  // Admin-Panel
  {
    path: 'dashboard',
    component: DashboardNavComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardHomeComponent },

      { path: 'account-settings', component: AccountSettingsComponent },

      { path: 'pricing', component: PricingComponent },

      { path: 'payment-personal-info', component: PaymentPersonalInfoComponent },
      { path: 'payment-card-info', component: PaymentCardInfoComponent },

      { path: 'keyword-result', component: KeywordResultComponent },

      { path: 'publishing-pages', component: PublishingPagesComponent },

    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
