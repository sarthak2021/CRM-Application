import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RefferalsDetails {
  checkbox: string; 
  exchange: string;
  documentname: string; 
  filename: string; 
  vstatus: string; 
  action: string;  
}

const ELEMENT_DATA1: RefferalsDetails[] = [  
  { checkbox: ' ', exchange: ' ', documentname: ' ', filename: ' ', vstatus: ' ', action: ' ' }, 
  { checkbox: ' ', exchange: ' ', documentname: ' ', filename: ' ', vstatus: ' ', action: ' ' },  
];

@Component({
  selector: 'app-apinward-documents',
  templateUrl: './apinward-documents.component.html',
  styleUrls: ['./apinward-documents.component.scss']
})
export class ApinwardDocumentsComponent implements OnInit {

  selectDropdown: any;
  displayedColumns1: string[] = ['checkbox', 'exchange', 'documentname', 'filename', 'vstatus', 'action']; 

  dataSourceRefferals = new MatTableDataSource<RefferalsDetails>(ELEMENT_DATA1);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceRefferals.paginator = this.paginator;
  }

}
