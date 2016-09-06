import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouterProviders } from './app.routing';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { StoryComponent } from './cards/story/';
import { StoryService } from './cards/story/story.service';
import { CarouselModule, ModalModule, AlertModule, DatepickerModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AlertModule,
        DatepickerModule,
        ModalModule,
        CarouselModule
    ],       // module dependencies
    declarations: [
        AppComponent,
        HomepageComponent,
        NotfoundpageComponent,
        StoryComponent,
        ROUTER_DIRECTIVES
    ],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [
        appRouterProviders,
        StoryService
    ]                    // services
})
export class AppModule { }
