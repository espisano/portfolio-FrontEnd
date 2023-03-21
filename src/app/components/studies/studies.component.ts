import { Component } from '@angular/core';
import { Studies } from 'src/app/model/studies';
import { StudiesService } from 'src/app/service/studies-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  studies: Studies[] = [];

  constructor(private studiesService: StudiesService, private tokenService: TokenService ) {}

    isLogged = false;

    ngOnInit(): void{
      this.loadStudies();
      if(this.tokenService.getToken()){
        this.isLogged = true;
        } else{
          this.isLogged = false;
        }
    }
  

    loadStudies():void{
      this.studiesService.list().subscribe(data => {this.studies = data;})
    }

    delete(id?: number){
      if(id!= undefined){
        this.studiesService.delete(id).subscribe(
          data => {
            this.loadStudies();
          }, err => {
            alert("No se pudieron borrar los estudios")
          }
        )
      }
    }
}

