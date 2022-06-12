import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RefferalsDetails {
  checkbox: string; 
  apcode: string;
  exchange: string; 
  segment: string; 
  sbasis: string; 
  deltype: string; 
  frombrkg: string; 
  tobrkg: string; 
  sharing: string; 
  minsharing: string; 
  sharingamt: string;
  action: string; 
}

const ELEMENT_DATA1: RefferalsDetails[] = [  
  { checkbox: ' ', apcode: ' ', exchange: ' ', segment: ' ', sbasis: ' ', deltype: ' ', frombrkg: ' ', tobrkg: ' ', sharing: ' ', minsharing: ' ', sharingamt: ' ', action: ' ' },  
  { checkbox: ' ', apcode: ' ', exchange: ' ', segment: ' ', sbasis: ' ', deltype: ' ', frombrkg: ' ', tobrkg: ' ', sharing: ' ', minsharing: ' ', sharingamt: ' ', action: ' ' }, 
];
@Component({
  selector: 'app-apinward-brokeragesharing',
  templateUrl: './apinward-brokeragesharing.component.html',
  styleUrls: ['./apinward-brokeragesharing.component.scss']
})
export class ApinwardBrokeragesharingComponent implements OnInit {

  selectDropdown:any;
  displayedColumns1: string[] = ['checkbox', 'apcode', 'exchange', 'segment', 'sbasis', 'deltype', 'frombrkg', 'tobrkg', 'sharing', 'minsharing', 'sharingamt', 'action']; 

  dataSourceRefferals = new MatTableDataSource<RefferalsDetails>(ELEMENT_DATA1);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceRefferals.paginator = this.paginator;
  }

}
