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
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: RouterConfig = [
  {
    path: '',
    component: HomepageComponent
  },
  { path: '**', component: NotfoundpageComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
