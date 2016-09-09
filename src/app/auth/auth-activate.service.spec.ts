/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthActivateService } from './auth-activate.service';

describe('Service: AuthActivate', () => {
  beforeEach(() => {
    addProviders([AuthActivateService]);
  });

  it('should ...',
    inject([AuthActivateService],
      (service: AuthActivateService) => {
        expect(service).toBeTruthy();
      }));
});
