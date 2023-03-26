import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  Person: person = new person("","","","");
  isLogged:boolean=false;
  constructor(public personService: PersonService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadPerson();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  loadPerson():void{
    this.personService.detail(1).subscribe(data => 
      {this.Person=data});
  }
}