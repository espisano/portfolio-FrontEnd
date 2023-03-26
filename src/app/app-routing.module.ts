import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditStudiesComponent } from './components/studies/edit-studies.component';
import { NewStudiesComponent } from './components/studies/new-studies.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newExperience', component: NewExperienceComponent},
  {path:'editExperience/:id', component: EditExperienceComponent},
  {path:'newStudies', component: NewStudiesComponent},
  {path:'editStudies/:id', component: EditStudiesComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'editAboutMe/:id', component: EditAboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
