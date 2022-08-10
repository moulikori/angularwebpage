import { TestBed } from '@angular/core/testing';

import { ProductdetialsService } from './productdetials.service';

describe('ProductdetialsService', () => {
  let service: ProductdetialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdetialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
