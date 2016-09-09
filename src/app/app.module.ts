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
import { LoginComponent } from './auth/login/';
import { AuthService } from './auth/auth.service';
import { FixedComponent } from './fixed/';
import { AuthManagerService } from './auth/auth-manager.service';
import { AuthActivateService } from './auth/auth-activate.service';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { CarouselModule, ModalModule, AlertModule, DatepickerModule, DropdownModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AlertModule,
        DatepickerModule,
        ModalModule,
        CarouselModule,
        DropdownModule
    ],       // module dependencies
    declarations: [
        AppComponent,
        HomepageComponent,
        NotfoundpageComponent,
        StoryComponent,
        LoginComponent,
        FixedComponent,
        LoginpageComponent,
        ProfilepageComponent,
        ROUTER_DIRECTIVES
    ],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [
        appRouterProviders,
        StoryService,
        AuthService,
        AuthManagerService,
        AuthActivateService
    ]                    // services
})
export class AppModule { }
