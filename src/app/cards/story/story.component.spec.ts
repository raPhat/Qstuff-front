/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { StoryComponent } from './story.component';

describe('Component: Story', () => {
  it('should create an instance', () => {
    let component = new StoryComponent();
    expect(component).toBeTruthy();
  });
});
