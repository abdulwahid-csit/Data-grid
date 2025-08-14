/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SplitColumnsService } from './split-columns.service';

describe('Service: SplitColumns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplitColumnsService]
    });
  });

  it('should ...', inject([SplitColumnsService], (service: SplitColumnsService) => {
    expect(service).toBeTruthy();
  }));
});
