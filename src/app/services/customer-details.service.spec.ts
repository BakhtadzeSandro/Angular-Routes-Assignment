/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerDetailsService } from './customer-details.service';

describe('Service: CustomerDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDetailsService]
    });
  });

  it('should ...', inject([CustomerDetailsService], (service: CustomerDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
