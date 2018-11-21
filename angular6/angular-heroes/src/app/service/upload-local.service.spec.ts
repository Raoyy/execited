import { TestBed } from '@angular/core/testing';

import { UploadLocalService } from './upload-local.service';

describe('UploadLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadLocalService = TestBed.get(UploadLocalService);
    expect(service).toBeTruthy();
  });
});
