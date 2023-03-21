import { TestBed } from '@angular/core/testing';

import { StudiesServiceService } from './studies-service.service';

describe('StudiesServiceService', () => {
  let service: StudiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
