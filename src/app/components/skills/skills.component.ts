import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skills-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private skillsService: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.loadSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadSkills(): void{
    this.skillsService.list().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillsService.delete(id).subscribe(
        data => {
          this.loadSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}
