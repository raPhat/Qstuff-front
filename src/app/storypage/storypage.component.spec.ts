/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
// import { beforeEachProviders } from '@angular/core/testing/'
import { StorypageComponent } from './storypage.component';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../cards/story/story.service';
import { Observable } from 'rxjs/Rx';

describe('Component: Storypage', () => {


  // beforeEach(() => {
  //   addProviders([StorypageComponent,
  //   provide(StoryService, {}),
  //   provide(ActivatedRoute, {
  //       useValue: {
  //         params: {
  //           id: 1
  //         }
  //       }
  //     })
  //   ]);
  //
  // });

  //http://stackoverflow.com/questions/39376840/angular2-rc5-mock-activated-route-params
  beforeEach(() => {
      addProviders([
        StorypageComponent,{ provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'id': 1 }]) } }
      ,StoryService])
  });

  let component;
  it('should create an instance',
    inject([StorypageComponent], (app: StorypageComponent) => {
      app.ngOnInit();
      component = app;
      expect(component).toBeTruthy();
    }));

  it('title should equal == \'PERFUME: เสาวธาร\'',
    inject([StorypageComponent], (app: StorypageComponent) => {
      expect(component.story.title).toEqual('PERFUME: เสาวธาร');
    }));

});
