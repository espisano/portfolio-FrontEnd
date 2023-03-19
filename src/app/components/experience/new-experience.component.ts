import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience-service.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit{
  companyName: string = '';
  jobDescription: string = "";
  constructor(private experienceService: ExperienceService, private router: Router) {}


  ngOnInit(): void {
    
  }

  onCreate(): void{
    const exp = new Experience(this.companyName, this.jobDescription);
    this.experienceService.save(exp).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("La nueva experiencia no pudo ser añadida");
        this.router.navigate(['']);
      }
    )
  }
}
