import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './pages/alert/alert.component';
import { SeeAlertsListComponent } from './see-alerts/see-alerts-list/see-alerts-list.component';
import { SeeAlertsDeleteComponent } from './see-alerts/see-alerts-delete/see-alerts-delete.component';
import { VideoComponent } from './pages/video/video.component';
import { CheckListComponent } from './pages/check-list/check-list.component';
import { DailysComponent } from './pages/dailys/dailys.component';
import { VitalComponent } from './pages/vital/vital.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { VitalNurseListComponent } from './vital-nurse/vital-nurse-list/vital-nurse-list.component';
import { VitalNurseDetailsComponent } from './vital-nurse/vital-nurse-details/vital-nurse-details.component';
import { VitalNurseDeleteComponent } from './vital-nurse/vital-nurse-delete/vital-nurse-delete.component';
import { DailyInfoComponent } from './dailys/daily-info/daily-info.component';
import { DailyTipComponent } from './dailys/daily-tip/daily-tip.component';

import { AuthGuard } from './guards/auth.guard';

// Components


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'alert', component: AlertComponent, data: {title: 'Alert'}, canActivate: [AuthGuard]},
  {path: 'video', component: VideoComponent, data: {title: 'Video'}, canActivate: [AuthGuard]},
  {path: 'checkList', component: CheckListComponent, data: {title: 'Check List'}, canActivate: [AuthGuard]},
  {path: 'dailys', component: DailysComponent, data: {title: 'Dailys'}, canActivate: [AuthGuard]},
  {path: 'vitalSign', component: VitalComponent, data: {title: 'Vital Sign'}, canActivate: [AuthGuard]},

  {path: 'seeAlerts', component: SeeAlertsListComponent, data: {title: 'See Alerts'}, canActivate: [AuthGuard]},
  {path: 'seeAlerts/delete/:id', component: SeeAlertsDeleteComponent, data: {title: 'Delete Alert'}, canActivate: [AuthGuard]},

  {path: 'vitalSign/vitalSign-list-Nurse', component: VitalNurseListComponent, data: {title: 'Display Vital Sign for Nurse'}, canActivate: [AuthGuard]},
  {path: 'vitalSign/vitalSign-list-Nurse/add', component: VitalNurseDetailsComponent, data: {title: 'Add New Vital Sign'}, canActivate: [AuthGuard]},
  {path: 'vitalSign/vitalSign-list-Nurse/edit/:id', component: VitalNurseDetailsComponent, data: {title: 'Edit Vital Sign'}, canActivate: [AuthGuard]},
  {path: 'vitalSign/vitalSign-list-Nurse/delete/:id', component: VitalNurseDeleteComponent, data: {title: 'Delete Vital Sign'}, canActivate: [AuthGuard]},

  {path: 'dailys/dailyInfo', component: DailyInfoComponent, data: {title: 'Add New Daily Information'}, canActivate: [AuthGuard]},
  {path: 'dailys/dailyTip', component: DailyTipComponent, data: {title: 'Display Daily Tips'}, canActivate: [AuthGuard]},

  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Log In'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
