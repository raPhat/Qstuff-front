/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { addProviders } from '@angular/core/testing/';
import { AppComponent } from './app.component';
import { ViewContainerRef, ViewEncapsulation, Component } from '@angular/core';

describe('App: QstuffClient', () => {
  beforeEach(() => {
    addProviders([AppComponent,ViewContainerRef]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('app works!');
    }));
});
