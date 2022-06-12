import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RefferalsDetails {
  checkbox: string; 
  exchange: string;
  segment: string;  
  registrationca: string; 
  action: string;  
}

const ELEMENT_DATA1: RefferalsDetails[] = [  
  { checkbox: ' ', exchange: ' ', segment: ' ', registrationca: ' ', action: ' ' },   
  { checkbox: ' ', exchange: ' ', segment: ' ', registrationca: ' ', action: ' ' },  
];

export interface RefferalsDetails2 {
  checkbox: string; 
  exchange: string;
  segment: string;  
  neftdetails: string; 
  tranamt:string;
  action: string;  
}

const ELEMENT_DATA2: RefferalsDetails2[] = [  
  { checkbox: ' ', exchange: ' ', segment: ' ', neftdetails: ' ', tranamt:'', action: ' ' },   
  { checkbox: ' ', exchange: ' ', segment: ' ', neftdetails: ' ', tranamt:'', action: ' ' }, 
];
@Component({
  selector: 'app-apinward-exchangelinking',
  templateUrl: './apinward-exchangelinking.component.html',
  styleUrls: ['./apinward-exchangelinking.component.scss']
})
export class ApinwardExchangelinkingComponent implements OnInit {

  selectDropdown: any;
  displayedColumns1: string[] = ['checkbox', 'exchange', 'segment', 'registrationca', 'action']; 
  displayedColumns2: string[] = ['checkbox', 'exchange', 'segment', 'neftdetails', 'tranamt', 'action']; 


  dataSourceRefferals = new MatTableDataSource<RefferalsDetails>(ELEMENT_DATA1);
  dataSourceRefferals2 = new MatTableDataSource<RefferalsDetails2>(ELEMENT_DATA2);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceRefferals.paginator = this.paginator;
  }

}
