import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';
import { Global } from '../common/global';
import { Snakbar } from '../common/snakbar';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Register!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,private router: Router,
        private global: Global, private authService: AuthService,
        private rest: RestService,private notification:Snakbar,
        // public dialog: MatDialog, 
  ) { }

  ngOnInit(): void {
    this.Register = this.formBuilder.group({
      EmailId: ['', [Validators.required]],
      Fullname: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.maxLength(100)]]
  });

  this.authService.logout();
  this.Register.markAsUntouched();
  }
  get EmailId() { return this.Register.get('EmailId'); }
  get Password() { return this.Register.get('Password'); }
  get Fullname() { return this.Register.get('Fullname'); }



  RegisterUser() {
    const model = {
        EmailId: this.EmailId?.value,
        Password: this.Password?.value,
        FullName: this.Fullname?.value,

    };
    this.rest.postParams(this.global.getapiendpoint() + 'register', model).subscribe((data: any) => {
        if (data.Success != false) {
            this.notification.openSnackBarSuccess(data.Message);
            this.router.navigate(['/CRM/login']);
        }
        else {
            this.notification.openSnackBarError(data.Message);
        }
    });
}


}
