import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';
import { Global } from '../common/global';
import { Snakbar } from '../common/snakbar';
import { RestService } from '../services/rest.service';
// import { ApinwardLoginSuccessfullComponent } from './login-success-dialog/login-successfull.component';

@Component({
  selector: 'app-apinward-login',
  templateUrl: './apinward-login.component.html',
  styleUrls: ['./apinward-login.component.scss']
})

export class ApinwardLoginComponent implements OnInit {

    Login!: FormGroup;
    hide = true;

    constructor(
        private formBuilder: FormBuilder,private router: Router,
        private global: Global, private authService: AuthService,
        private rest: RestService,private notification:Snakbar,
        // public dialog: MatDialog, 
    ) { }

    ngOnInit() {

        this.Login = this.formBuilder.group({
            EmailId: ['', [Validators.required]],
            Password: ['', [Validators.required, Validators.maxLength(100)]]
        });

        this.authService.logout();
        this.Login.markAsUntouched();
    }

    get EmailId() { return this.Login.get('EmailId'); }
    get Password() { return this.Login.get('Password'); }

    // loginUser() {
    //     var model = {
    //         UserName: this.UserName?.value,
    //         Password: this.Password?.value,
    //     };

    //     this.rest.postParams(this.global.getapiendpoint() + 'Login/AuthenticateUser', model).subscribe((data: any) => {
    //         if (data.Success) {
    //             this.rest.getById(this.global.getapiendpoint() + 'menu/GetAllMenuById/', data.Data.DefaultRoleId).subscribe((menudata: any) => {
    //                 localStorage.setItem('isLoggedIn', "true");
    //                 localStorage.setItem('userLoggedIn', JSON.stringify(data.Data));
    //                 localStorage.setItem('menuItems', JSON.stringify(menudata.Data));
    //                 // this.loginSuccessfull();
    //                 this.router.navigate(['/CRM/home']);
    //             });
    //         }
    //         else {
    //             this.notification.openSnackBarError(data.Message);
    //         }
    //     });
    // }


    loginUser() {
        var model = {
            EmailId: this.EmailId?.value,
            Password: this.Password?.value
        };

        this.rest.postParams(this.global.getapiendpoint() + 'login', model).subscribe((data: any) => {
            if (data.Success) {
                this.notification.openSnackBarSuccess(data.Message);
                localStorage.setItem('isLoggedIn', "true");
                this.router.navigate(['/CRM/cinfo']);
            }
            else {
                this.notification.openSnackBarError(data.Message);
            }
        });
    }
    // loginSuccessfull(){
    //     this.dialog.open(ApinwardLoginSuccessfullComponent);
    // }

}
