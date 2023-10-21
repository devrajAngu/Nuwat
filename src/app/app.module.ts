import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollDirective } from './components/header/scroll.directive';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { ChairmanMessComponent } from './components/chairman-mess/chairman-mess.component';
import { MembersComponent } from './components/members/members.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ScrollDirective,
    AboutUsComponent,
    LandingPageComponent,
    LoginComponent,
    ChairmanMessComponent,
    MembersComponent,
    RegistrationComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ScrollDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
