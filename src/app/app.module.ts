import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    SocialMediaComponent,
    LoginButtonComponent,
    BannerComponent,    
    ExperienceComponent,
    StudiesComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300,
    }),
    AppRoutingModule,
  ],    
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
