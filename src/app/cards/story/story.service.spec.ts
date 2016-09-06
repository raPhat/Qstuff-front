/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { StoryService } from './story.service';

describe('Service: Story', () => {
  beforeEach(() => {
    addProviders([StoryService]);
  });

  it('should ...',
    inject([StoryService],
      (service: StoryService) => {
        expect(service).toBeTruthy();
      }));
});
