// import { Routes, RouterModule } from '@angular/router';
//
// const appRoutes: Routes = [
//   { path: '', component: HomepageComponent }
// ];
//
// export const appRoutingProviders: any[] = [
//
// ];
//
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { provideRouter, RouterConfig } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StorypageComponent } from './storypage/storypage.component';
import { ReadingpageComponent } from './readingpage/readingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { AuthManagerService } from './auth/auth-manager.service';
import { AuthActivateService } from './auth/auth-activate.service';

const routes: RouterConfig = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'story/:id',
        component: StorypageComponent
    },
    {
        path: 'read/:id',
        component: ReadingpageComponent,
    },
    {
        path: 'p/:id',
        component: ProfilepageComponent,
        canActivate: [AuthManagerService]
    },
    {
        path: 'login',
        component: LoginpageComponent,
        canActivate: [AuthActivateService]
    },
    { path: '**', component: NotfoundpageComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
