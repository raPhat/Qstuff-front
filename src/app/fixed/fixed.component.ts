import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'app-fixed',
  templateUrl: 'fixed.component.html',
  styleUrls: ['fixed.component.css']
})
export class FixedComponent implements OnInit {

  isLoggedIn: Boolean = this.authService.isLoggedIn_bl();
  constructor(
      private router: Router,
      private authService: AuthService
    ) {
        // this._loggedIn_ob = <Subject<Boolean>>new Subject();
        // this.loggedIn_ob = this._loggedIn_ob.asObservable();
        // this.loggedIn_ob
        //     .subscribe(status => {
        //         this.isLoggedIn = status
        //     });
    }


      ngOnInit() {
          this.authService.isLoggedIn()
              .subscribe(status => {
                  // this._loggedIn_ob.next(status);
                  this.isLoggedIn = status;
              });
      }

      logout() {
          // this.authService.logout()
          //     .subscribe((isLoggedIn) => {
          //         this.isLoggedIn = isLoggedIn;
          //         this.router.navigate(['/']);
          //     });
          this.authService.logout();
      }

}
