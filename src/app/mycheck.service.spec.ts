import { TestBed } from '@angular/core/testing';

import { MycheckService } from './mycheck.service';

describe('MycheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycheckService = TestBed.get(MycheckService);
    expect(service).toBeTruthy();
  });
});
