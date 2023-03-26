import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-abut-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit{
  person: person = null;

  constructor(
    private activatedRouter: ActivatedRoute,
    private personService: PersonService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personService.detail(id).subscribe(
      data => {
        this.person = data;
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.personService.update(id, this.person).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )

  }
  
}

/*   public uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "profile_" + id;
    this.imageService.uploadImage($event, name)
  }
} */