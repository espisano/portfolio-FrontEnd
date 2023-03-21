import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Studies } from 'src/app/model/studies';
import { StudiesService } from 'src/app/service/studies-service.service';

@Component({
  selector: 'app-new-studies',
  templateUrl: './new-studies.component.html',
  styleUrls: ['./new-studies.component.css']
})
export class NewStudiesComponent implements OnInit{
  schoolName: string = '';
  title: string = "";
  constructor(private studiesService: StudiesService, private router: Router) {}


  ngOnInit(): void {
    
  }

  onCreate(): void{
    const studies = new Studies(this.schoolName, this.title);
    this.studiesService.save(studies).subscribe(
      data=>{
        alert("Carrera añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("La nueva carrera no pudo ser añadida");
        this.router.navigate(['']);
      }
    )
  }
}
