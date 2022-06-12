import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';
import { Global } from '../common/global';
import { Snakbar } from '../common/snakbar';
import { RestService } from '../services/rest.service';
import { MatDialog, MatDialogContainer, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.scss']
})
export class CustomerinfoComponent implements OnInit {

  listofcustomer: any = '';
  addcustomer!: FormGroup;
  updatecustomer!: FormGroup
  email:any
  phone:any
  address:any
  gstno:any
  reminder:any
  fname:any
  cid: any

  constructor(
        private global: Global, private authService: AuthService,
        private rest: RestService,private notification:Snakbar,
        public dialog: MatDialog, private formBuilder: FormBuilder,
        private router: Router
  ) { }

  ngOnInit(): void {
    this.getallcustomer()

    this.addcustomer = this.formBuilder.group({
      Name: ['', Validators.required],
      emailaddress: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],  // ^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]],
      Address: ['', Validators.required],
      GSTNo: ['', Validators.required],
      Frequencyofreminder: ['', Validators.required]
  })

  this.updatecustomer = this.formBuilder.group({
    Name: ['', Validators.required],
    emailaddress: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],  // ^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$
    mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]],
    Address: ['', Validators.required],
    GSTNo: ['', Validators.required],
    Frequencyofreminder: ['', Validators.required]
})
  }

    get emailaddress() { return this.addcustomer.get('emailaddress'); }
    get Name() { return this.addcustomer.get('Name'); }
    get mobilenumber() { return this.addcustomer.get('mobilenumber'); }
    get Address() { return this.addcustomer.get('Address'); }
    get GSTNo() { return this.addcustomer.get('GSTNo'); }
    get Frequencyofreminder() { return this.addcustomer.get('Frequencyofreminder'); }

  getallcustomer() {

    this.rest.getAll(this.global.getapiendpoint() + 'getallcustomersinfo').subscribe((data: any) => {
        if (data.Success != false) {
          this.listofcustomer = data.Data
        }
        else {
            this.notification.openSnackBarError(data.Message);
        }
    });
}

deletecustomer(CustomerID:any) {
  this.rest.deleteById(this.global.getapiendpoint() + 'deletecustomerinfo/', CustomerID).subscribe((data: any) => {
      if (data.Success != false) {
          this.notification.openSnackBarSuccess(data.Message);
          location.reload()
      }
      else {
          this.notification.openSnackBarError(data.Message);
      }
  });
}

AddCustomer() {
  const model = {
      Name: this.addcustomer.value.Name,
      EmailId: this.addcustomer.value.emailaddress,
      Address: this.addcustomer.value.Address,
      Phone: this.addcustomer.value.mobilenumber,
      GSTno: this.addcustomer.value.GSTNo,
      FrequencyofAutomatedReminder: this.addcustomer.value.Frequencyofreminder,

  };
  // console.log(model)
  this.rest.postParams(this.global.getapiendpoint() + 'addcustomerinfo', model).subscribe((data: any) => {
      if (data.Success != false) {
        this.dialog.closeAll
        this.notification.openSnackBarSuccess(data.Message);
        location.reload()
      }
      else {
          this.notification.openSnackBarError(data.Message);
      }
  });
}

UpdateCustomer(CustomerID:any) {
  const model = {
      Name: this.updatecustomer.value.Name,
      EmailId: this.updatecustomer.value.emailaddress,
      Address: this.updatecustomer.value.Address,
      Phone: this.updatecustomer.value.mobilenumber,
      GSTno: this.updatecustomer.value.GSTNo,
      FrequencyofAutomatedReminder: this.updatecustomer.value.Frequencyofreminder,

  };
  // console.log(model)
  this.rest.UpdateById(this.global.getapiendpoint() + 'updatecustomerinfo/' + CustomerID, model).subscribe((data: any) => {
      if (data.Success != false) {
        this.dialog.closeAll
        this.notification.openSnackBarSuccess(data.Message);
        location.reload()
      }
      else {
          this.notification.openSnackBarError(data.Message);
      }
  });
}
getcustomerdata(CustomerID:any){
  this.rest.postParamsbyid(this.global.getapiendpoint() + 'getcustomerbyid/'+ CustomerID).subscribe((data: any) => {
    if (data.Success != false) {
     this.cid = data.Data.CustomerID
      this.updatecustomer = new FormGroup({
      Name: new FormControl(data.Data['Name']),
      emailaddress: new FormControl(data.Data['EmailId']),
      mobilenumber: new FormControl(data.Data['Phone']),
      Address: new FormControl(data.Data['Address']),
      GSTNo: new FormControl(data.Data['GSTno']),
      Frequencyofreminder: new FormControl(data.Data['FrequencyofAutomatedReminder'])
      })
    }
    else {
        this.notification.openSnackBarError(data.Message);
    }
});
}

opendialog(dialog:any){
  this.dialog.open(dialog,{ disableClose: true })
  
}

}
