import { ViewContainerRef, ViewEncapsulation, Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'app works!';
    constructor(
        private router: Router,
        private authService: AuthService,
        public viewContainerRef: ViewContainerRef
    ) {
        this.viewContainerRef = viewContainerRef;
    }


    isLoggedIn: Boolean = this.authService.isLoggedIn_bl();

    ngOnInit() {
        this.authService.isLoggedIn()
            .subscribe(status => {
                // this._loggedIn_ob.next(status);
                this.isLoggedIn = status;
            });
    }
    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };
    logout() {
        // this.authService.logout()
        //     .subscribe((isLoggedIn) => {
        //         this.isLoggedIn = isLoggedIn;
        //         this.router.navigate(['/']);
        //     });
        this.authService.logout();
        this.router.navigate(['/']);
    }

}
