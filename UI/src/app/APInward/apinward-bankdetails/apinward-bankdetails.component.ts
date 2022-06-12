import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RefferalsDetails {
  checkbox: string; 
  bankactype: string;
  bname: string; 
  brname: string; 
  braddress: string; 
  braccount: string; 
  accname: string; 
  ifsc: string; 
  micr: string; 
  bsr: string; 
  isdefault: string;
  action: string; 
}

const ELEMENT_DATA1: RefferalsDetails[] = [  
  { checkbox: ' ', bankactype: ' ', bname: ' ', brname: ' ', braddress: ' ', braccount: ' ', accname: ' ', ifsc: ' ', micr: ' ', bsr: ' ', isdefault: ' ', action: ' ' },  
  { checkbox: ' ', bankactype: ' ', bname: ' ', brname: ' ', braddress: ' ', braccount: ' ', accname: ' ', ifsc: ' ', micr: ' ', bsr: ' ', isdefault: ' ', action: ' ' }, 
];

@Component({
  selector: 'app-apinward-bankdetails',
  templateUrl: './apinward-bankdetails.component.html',
  styleUrls: ['./apinward-bankdetails.component.scss']
})
export class ApinwardBankdetailsComponent implements OnInit {

  selectDropdown: any;
  displayedColumns1: string[] = ['checkbox', 'bankactype', 'bname', 'brname', 'braddress', 'braccount', 'accname', 'ifsc', 'micr', 'bsr', 'isdefault', 'action']; 

  dataSourceRefferals = new MatTableDataSource<RefferalsDetails>(ELEMENT_DATA1);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceRefferals.paginator = this.paginator;
  }

}
