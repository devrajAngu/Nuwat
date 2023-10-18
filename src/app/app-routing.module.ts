import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {
    path:'', 
    component: LandingPageComponent,
    children: [
      {path:'', pathMatch:'full', component:HomeComponent },
      {path:'about', component: AboutUsComponent},
       // Add this route for the 'notes' component
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
