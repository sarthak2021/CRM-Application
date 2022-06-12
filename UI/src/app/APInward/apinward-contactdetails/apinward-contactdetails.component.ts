import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RefferalsDetails {
  checkbox: string; 
  cperson: string;
  designation: string; 
  mobile: string; 
  isauthorised: string; 
  action: string;  
}

const ELEMENT_DATA1: RefferalsDetails[] = [  
  { checkbox: ' ', cperson: ' ', designation: ' ', mobile: ' ', isauthorised: ' ', action: ' ' }, 
  { checkbox: ' ', cperson: ' ', designation: ' ', mobile: ' ', isauthorised: ' ', action: ' ' },  
];
@Component({
  selector: 'app-apinward-contactdetails',
  templateUrl: './apinward-contactdetails.component.html',
  styleUrls: ['./apinward-contactdetails.component.scss']
})
export class ApinwardContactdetailsComponent implements OnInit {

  selectDropdown: any;
  displayedColumns1: string[] = ['checkbox', 'cperson', 'designation', 'mobile', 'isauthorised', 'action']; 

  dataSourceRefferals = new MatTableDataSource<RefferalsDetails>(ELEMENT_DATA1);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceRefferals.paginator = this.paginator;
  }

}
