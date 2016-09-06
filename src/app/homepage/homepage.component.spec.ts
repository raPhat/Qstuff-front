/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { StoryService } from '../cards/story/story.service';

describe('Component: Homepage', () => {
  it('should create an instance', () => {
    let component = new HomepageComponent(new StoryService);
    expect(component).toBeTruthy();
  });
});
