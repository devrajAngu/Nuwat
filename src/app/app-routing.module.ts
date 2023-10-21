import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MembersComponent } from './components/members/members.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {
    path:'', 
    component: LandingPageComponent,
    children: [
      {path:'', pathMatch:'full', component:HomeComponent },
      {path:'about', component: AboutUsComponent},
      {path:'members', component: MembersComponent},
      {path:'register', component: RegistrationComponent},
      {path:'terms-condition', component: TermsConditionsComponent},


       // Add this route for the 'notes' component
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
