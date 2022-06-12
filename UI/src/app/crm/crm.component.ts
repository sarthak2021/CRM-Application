import { Component, OnInit, ViewChild } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';
import { Global } from '../common/global';
import { Snakbar } from '../common/snakbar';
import { RestService } from '../services/rest.service';
import { MatDialog, MatDialogContainer, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {
  panelOpenState = false;
  listofcrm: any
  crmdata: any
  addcrm!: FormGroup;
@ViewChild('addcrmform') form!: NgForm
@ViewChild('sendemail') emailform!: NgForm

  constructor(
    private global: Global, private authService: AuthService,
    private rest: RestService, private notification: Snakbar,
    public dialog: MatDialog, private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getcustomerid()
    // this.convertTime("01:45 PM")

    // this.addcrm = this.formBuilder.group({
    //   CustomerID: ['', Validators.required],
    //   ConversationInfo: ['', Validators.required],
    //   ContactDate: ['', Validators.required],
    //   ContactTime: ['', Validators.required]
    // })
    this.addcrm = new FormGroup({
      CustomerID: new FormControl(['']),
      ConversationInfo: new FormControl(['']),
      ContactDate: new FormControl(['']),
      ContactTime: new FormControl([''])
      })
  }
  get CustomerID() { return this.addcrm.get('CustomerID'); }
  get ConversationInfo() { return this.addcrm.get('Password'); }
  get ContactDate() { return this.addcrm.get('ContactDate'); }
  get ContactTime() { return this.addcrm.get('ContactTime'); }

  activeAccordion = ''

  isActive = (name: string) => this.activeAccordion === name

  setActive = (name: string) => this.activeAccordion = name

  opendialog(dialog: any) {
    this.dialog.open(dialog, { disableClose: true })

  }

  getcustomerid() {

    this.rest.getAll(this.global.getapiendpoint() + 'getcustomersid').subscribe((data: any) => {
      if (data.Success != false) {
        this.listofcrm = data.Data
        // this.getcrmbyid(data.data.CustomerID)
        // console.log(data.Data)
      }
      else {
        this.notification.openSnackBarError(data.Message);
      }
    });
  }

  getcrmbyid(CustomerID: any) {
    console.log(CustomerID)
    const model = {
      CustomerID: CustomerID
    };
    this.rest.postParams(this.global.getapiendpoint() + 'getcrminfo', model).subscribe((data: any) => {
      if (data.Success != false) {
        this.crmdata = data.data
      }
      else {
        this.notification.openSnackBarError(data.Message);
      }
    });
  }

  Getcustomerid(CustomerID: any){
    // console.log(CustomerID)
      this.form.setValue({
        cid: CustomerID,
        date: '',
        time: '',
        cinfo: ''
      })
  }

  Getcustomeremail(emailid: any){
    // console.log(CustomerID)
      this.emailform.setValue({
        email: emailid,
        subject: '',
        emailbody: ''
      })
  }

  test(value:any){
    console.warn(value.cinfo)
  }
  addcrmfn(value:any) {
    const model = {
      CustomerID: value.cid,
      ConversationInfo: value.cinfo,
      ContactDateTime: value.date +"T"+ value.time,


    };
    console.log(model)
    this.rest.postParams(this.global.getapiendpoint() + 'addcrm', model).subscribe((data: any) => {
      if (data.Success != false) {
        this.crmdata = data.data
        this.notification.openSnackBarSuccess(data.Message);
        location.reload()
      }
      else {
        this.notification.openSnackBarError(data.Message);
      }
    });
  }

  convertTime(timeStr: any) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    if (modifier === 'AM') {
      hours = parseInt(hours, 10) + 12;
    }
    console.log(`${hours}:${minutes}`)
    // this.addcrmfn(`${hours}:${minutes}`)
    return `${hours}:${minutes}`;
  }

  sendemailfn(value:any) {
    const model = {
      toEmail: value.email,
      subjectEmail: value.subject,
      dataEmailTemplateBody: value.emailbody,


    };
    console.log(model)
    this.rest.postParams(this.global.getapiendpoint() + 'sendemail', model).subscribe((data: any) => {
      
        // this.crmdata = data.data
        this.notification.openSnackBarSuccess(data.Message);
        location.reload()
      }
  
    );
  }

}
