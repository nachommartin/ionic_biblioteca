import { TestBed } from '@angular/core/testing';

import { BiblioServService } from './biblio-serv.service';

describe('BiblioServService', () => {
  let service: BiblioServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiblioServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
