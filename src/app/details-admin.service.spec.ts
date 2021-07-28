import { TestBed } from '@angular/core/testing';

import { DetailsAdminService } from './details-admin.service';

describe('DetailsAdminService', () => {
  let service: DetailsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
