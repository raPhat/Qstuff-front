/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthManagerService } from './auth-manager.service';

describe('Service: AuthManager', () => {
  beforeEach(() => {
    addProviders([AuthManagerService]);
  });

  it('should ...',
    inject([AuthManagerService],
      (service: AuthManagerService) => {
        expect(service).toBeTruthy();
      }));
});
