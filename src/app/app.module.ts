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
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewStudiesComponent } from './components/studies/new-studies.component';
import { EditStudiesComponent } from './components/studies/edit-studies.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';
import { FooterComponent } from './components/footer/footer.component';


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
    LoginComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewStudiesComponent,
    EditStudiesComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditAboutMeComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
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
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
