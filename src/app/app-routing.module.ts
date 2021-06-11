import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { PublishingPagesEditComponent } from './pages/publishing-pages-edit/publishing-pages-edit.component';
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
  { path: '', redirectTo: 'login', pathMatch: 'full', },

  // Auth
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },

  { path: 'onboarding', component: OnboardingComponent },

  { path: 'keyword-select', component: KeywordSelectionComponent },

  // Admin-Panel
  {
    path: '',
    component: DashboardNavComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardHomeComponent },

      { path: 'account', component: AccountSettingsComponent },

      { path: 'pricing', component: PricingComponent },

      { path: 'billing', component: PaymentPersonalInfoComponent },
      { path: 'payment-method', component: PaymentCardInfoComponent },

      { path: 'research', component: KeywordResultComponent },
      { path: 'project-lists', component: ProjectListComponent },
      { path: 'article-lists', component: ArticleListComponent },
      { path: 'keyword-lists', component: KeywordResultComponent },

      { path: 'publishing', component: PublishingPagesComponent },
      { path: 'publishing-page-edit', component: PublishingPagesEditComponent },

    ]
  }
]
// URL's for "LBB agency"

// Login Page = https://lbb-head.vercel.app/login
// Register Page = https://lbb-head.vercel.app/signup
// Account Page = https://lbb-head.vercel.app/account

// On - boarding Page = https://lbb-head.vercel.app/onboarding
// Keyword List Page = https://lbb-head.vercel.app/keyword-lists

// Dashboard Page = https://lbb-head.vercel.app/dashboard
// Keywords Results Page = https://lbb-head.vercel.app/research
// Article Spinner, Publishing, Quality Check Page = https://lbb-head.vercel.app/publishing
// Publishing Edit Page = https://lbb-head.vercel.app/publishing-page-edit

// Payment Personal Info Page = https://lbb-head.vercel.app/payment-personal-info
// Payment Card Info Page = https://lbb-head.vercel.app/payment-card-info

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
