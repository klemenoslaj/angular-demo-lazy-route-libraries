import { TestBed } from '@angular/core/testing';

import { LazyComponentService } from './lazy-component.service';

describe('LazyComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyComponentService = TestBed.get(LazyComponentService);
    expect(service).toBeTruthy();
  });
});
