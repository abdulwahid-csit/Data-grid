/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DragDrpService } from './drag-drp.service';

describe('Service: DragDrp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragDrpService]
    });
  });

  it('should ...', inject([DragDrpService], (service: DragDrpService) => {
    expect(service).toBeTruthy();
  }));
});
