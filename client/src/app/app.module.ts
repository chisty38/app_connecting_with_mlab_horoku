import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlertComponent } from './pages/alert/alert.component';
import { VideoComponent } from './pages/video/video.component';
import { CheckListComponent } from './pages/check-list/check-list.component';
import { DailysComponent } from './pages/dailys/dailys.component';
import { VitalComponent } from './pages/vital/vital.component';
import { VitalNurseListComponent } from './vital-nurse/vital-nurse-list/vital-nurse-list.component';
import { VitalNurseDetailsComponent } from './vital-nurse/vital-nurse-details/vital-nurse-details.component';
import { VitalNurseDeleteComponent } from './vital-nurse/vital-nurse-delete/vital-nurse-delete.component';
import { DailyInfoComponent } from './dailys/daily-info/daily-info.component';
import { DailyTipComponent } from './dailys/daily-tip/daily-tip.component';
import { SeeAlertsDeleteComponent } from './see-alerts/see-alerts-delete/see-alerts-delete.component';
import { SeeAlertsListComponent } from './see-alerts/see-alerts-list/see-alerts-list.component';

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

// Route Guards
import { AuthGuard } from './guards/auth.guard';


export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    VideoComponent,
    CheckListComponent,
    VitalComponent,
    VitalNurseListComponent,
    VitalNurseDetailsComponent,
    VitalNurseDeleteComponent,
    AlertComponent,
    DailysComponent,
    DailyInfoComponent,
    DailyTipComponent,
    SeeAlertsDeleteComponent,
    SeeAlertsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
