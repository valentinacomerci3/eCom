/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UiService } from './ui.service';

describe('Service: Ui', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiService]
    });
  });

  it('should ...', inject([UiService], (service: UiService) => {
    expect(service).toBeTruthy();
  }));
});
