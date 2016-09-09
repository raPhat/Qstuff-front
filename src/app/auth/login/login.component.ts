import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'form-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  @Input("modal") modal:any;

  localUser: Object = {
      username: '',
      password: ''
    };

    message: String;
    check_valid: Boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  callbackIogin: any;
  login() {
      // event.stopPropagation();
      this.callbackIogin = this.authService.login(this.localUser);
      this.message = this.callbackIogin.message;
      if (this.callbackIogin.status) {
          if(this.modal) {
            this.modal.hide();
          }
          if(this.router.url.indexOf("/login") > -1) {
              this.router.navigate(['/p/1']);
          }
        this.check_valid = false;
      } else {
        this.check_valid = true;
      }
  }

}
