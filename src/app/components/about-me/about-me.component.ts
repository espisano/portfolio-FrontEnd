import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  person: person = new person("","","");
  
  constructor(public personService: PersonService) {}

  ngOnInit(): void{
    this.personService.getPersona().subscribe(data => {this.person = data})
  }
}

