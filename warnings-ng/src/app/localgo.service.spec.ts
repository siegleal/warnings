import { TestBed } from '@angular/core/testing';

import { LocalgoService } from './localgo.service';

describe('LocalgoService', () => {
  let service: LocalgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
