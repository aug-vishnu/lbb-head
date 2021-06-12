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
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { KeywordSelectionComponent } from './pages/keyword-selection/keyword-selection.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { AgGridModule } from 'ag-grid-angular';
import { DateComponent, HeaderComponent, HeaderGroupComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { KeywordPageComponent } from './pages/keyword-page/keyword-page.component';
import { KeywordResultComponent } from './pages/keyword-result/keyword-result.component';
import { HttpClientModule } from '@angular/common/http';
import { PublishingPagesComponent } from './pages/publishing-pages/publishing-pages.component';
import { PublishingPagesEditComponent } from './pages/publishing-pages-edit/publishing-pages-edit.component';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ChartsModule } from 'ng2-charts';
import { LockedResearchComponent } from './pages/locked-research/locked-research.component';

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
    OnboardingComponent,
    KeywordSelectionComponent,
    AccountSettingsComponent,
    KeywordPageComponent,
    KeywordResultComponent,
    PublishingPagesComponent,
    PublishingPagesEditComponent,
    ArticleListComponent,
    ProjectListComponent,
    LockedResearchComponent,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatIconModule,
    DragDropModule,
    TextFieldModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
