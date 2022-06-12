import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RefferalsDetails {
  checkbox: string; 
  bname: string;
  bcode: string; 
  apcode: string; 
  address1: string; 
  address2: string; 
  country: string; 
  state: string; 
  city: string; 
  pincode: string; 
  telephone: string;
  action: string; 
}

const ELEMENT_DATA1: RefferalsDetails[] = [  
  { checkbox: ' ', bname: ' ', bcode: ' ', apcode: ' ', address1: ' ', address2: ' ', country: ' ', state: ' ', city: ' ', pincode: ' ', telephone: ' ', action: ' ' },  
  { checkbox: ' ', bname: ' ', bcode: ' ', apcode: ' ', address1: ' ', address2: ' ', country: ' ', state: ' ', city: ' ', pincode: ' ', telephone: ' ', action: ' ' },  
];
 
@Component({
  selector: 'app-apinward-branchdetails',
  templateUrl: './apinward-branchdetails.component.html',
  styleUrls: ['./apinward-branchdetails.component.scss']
})
export class ApinwardBranchdetailsComponent implements OnInit {

  displayedColumns1: string[] = ['checkbox', 'bname', 'bcode', 'apcode', 'address1', 'address2', 'country', 'state', 'city', 'pincode', 'telephone', 'action']; 

  dataSourceRefferals = new MatTableDataSource<RefferalsDetails>(ELEMENT_DATA1);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceRefferals.paginator = this.paginator;
  }

}
