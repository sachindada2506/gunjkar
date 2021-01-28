import { TestBed } from '@angular/core/testing';

import { LanguageCacheService } from './language-cache.service';

describe('LanguageCacheService', () => {
  let service: LanguageCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
