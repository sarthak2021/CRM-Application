import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { RegisterComponent } from './register/register.component';

//Components
import { ApinwardLoginComponent } from './Login/apinward-login.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { CrmComponent } from './crm/crm.component';


const routes: Routes = [
  { path: '', redirectTo: 'CRM/login', pathMatch: 'full'},

  { 
    path: 'CRM',
    component: ApinwardLoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: ApinwardLoginComponent },
    ]
  },
  
  { 
    path: 'CRM',
    component: RegisterComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'CRM',
    component: CrmComponent,
    children: [
      { path: '', redirectTo: 'crm', pathMatch: 'full' },
      { path: 'crm', component: CrmComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'CRM',
    component: CustomerinfoComponent,
    children: [
      { path: '', redirectTo: 'cinfo', pathMatch: 'full' },
      { path: 'cinfo', component: CustomerinfoComponent },
    ],
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
