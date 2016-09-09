import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

    loggedIn: Boolean = !!window.localStorage.getItem('auth_key');

    private _loggedIn_ob$: Subject<Boolean>;
    loggedIn_ob: any;
    constructor() {
      this._loggedIn_ob$ = <Subject<Boolean>>new Subject();
      this._loggedIn_ob$.asObservable();
          // this.loggedIn_ob = new Observable(observer => {
          //   // observer.next( this.loggedIn );
          //
          //     // let count = 0;
          //     // let interval = setInterval(() => {
          //     //   observer.next(count++);
          //     // }, 1000);
          // });
    }

    getLogIn_Ob() {
      return this._loggedIn_ob$;
    }


    login(credentials) {
      if (credentials.username === 'demo' && credentials.password === 'demo') {
        window.localStorage.setItem('auth_key', 'demo');
        this.loggedIn = true;
      }
      this._loggedIn_ob$.next(this.loggedIn);
      // return this._loggedIn_ob$;
      return {
        'status': this.loggedIn,
        'message': 'Could not start watchman; falling back to NodeWatcher for file system events.'
      };
    }

    logout() {
      window.localStorage.removeItem('auth_key');
      this.loggedIn = false;
      this._loggedIn_ob$.next(this.loggedIn);
      // return this._loggedIn_ob$;
      return this.loggedIn;
    }

    /**
     * check if the user is logged in or not
     * @return {Observable} login status
     */
    isLoggedIn(): Observable<any> {
      if (window.localStorage.getItem('auth_key')) {
        this.loggedIn = true;
      }
      this._loggedIn_ob$.next(this.loggedIn);
      // return this.getLogIn_Ob();
      return this.getLogIn_Ob();
    }

    isLoggedIn_bl(): Boolean {
      if (window.localStorage.getItem('auth_key')) {
        this.loggedIn = true;
      }
      return this.loggedIn;
    }

}
