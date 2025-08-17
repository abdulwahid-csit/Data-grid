/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwapColumnsService } from './swap-columns.service';

describe('Service: SwapColumns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapColumnsService]
    });
  });

  it('should ...', inject([SwapColumnsService], (service: SwapColumnsService) => {
    expect(service).toBeTruthy();
  }));
});
