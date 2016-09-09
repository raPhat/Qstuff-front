/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, inject } from '@angular/core/testing';
import { addProviders } from '@angular/core/testing/';
import { HomepageComponent } from './homepage.component';
import { StoryService } from '../cards/story/story.service';

describe('Component: Homepage', () => {

    beforeEach(() => {
      addProviders([HomepageComponent, StoryService]);
    });
    it('should create an instance',
      inject([HomepageComponent], (app: HomepageComponent) => {
        expect(app).toBeTruthy();
      }));

    it('should have as text [\'More\', \'Extra\', \'Lots of\', \'Surplus\'',
      inject([HomepageComponent], (app: HomepageComponent) => {
        var a = ['More', 'Extra', 'Lots of', 'Surplus'];
        app.ngOnInit();
        for(var i=0; i<a.length; i++) {
          expect(a).toContain(app.slides[i].text);
        }
      }));

      it('should create an Stories',
        inject([HomepageComponent], (app: HomepageComponent) => {
          app.ngOnInit();
          expect(app.stories).not.toBeNull();
          expect(app.stories.length).toEqual(3); // Now, We have 3 stories.
        }));
  //['More', 'Extra', 'Lots of', 'Surplus']

});
