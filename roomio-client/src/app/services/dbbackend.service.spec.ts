import { TestBed, inject } from '@angular/core/testing';

import { DbbackendService } from './dbbackend.service';

describe('DbbackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbbackendService]
    });
  });

  it('should be created', inject([DbbackendService], (service: DbbackendService) => {
    expect(service).toBeTruthy();
  }));
});
