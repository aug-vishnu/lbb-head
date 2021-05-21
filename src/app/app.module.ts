import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { TopBarComponent } from './dashboard/top-bar/top-bar.component';
import { RightBarComponent } from './dashboard/right-bar/right-bar.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PaymentPersonalInfoComponent } from './pages/payment-personal-info/payment-personal-info.component';
import { PaymentCardInfoComponent } from './pages/payment-card-info/payment-card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardFooterComponent,
    TopBarComponent,
    DashboardNavComponent,
    DashboardHomeComponent,
    SideBarComponent,
    RightBarComponent,
    PricingComponent,
    PaymentPersonalInfoComponent,
    PaymentCardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
