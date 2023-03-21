import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudiesComponent } from './new-studies.component';

describe('NewStudiesComponent', () => {
  let component: NewStudiesComponent;
  let fixture: ComponentFixture<NewStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
