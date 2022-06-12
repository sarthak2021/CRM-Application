import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RefferalsDetails {
  apname: string; 
  bname: string;
  bcode: string; 
  rmname: string; 
  rmcode: string; 
  constitution: string; 
  aname: string; 
  cdate: string; 
  status: string; 
  action: string; 
}

const ELEMENT_DATA1: RefferalsDetails[] = [  
  { apname: ' ', bname: ' ', bcode: ' ', rmname: ' ', rmcode: ' ', constitution: ' ', aname: ' ', cdate: ' ', status: ' ', action: ' ' },  
  { apname: ' ', bname: ' ', bcode: ' ', rmname: ' ', rmcode: ' ', constitution: ' ', aname: ' ', cdate: ' ', status: ' ', action: ' ' },  
];

@Component({
  selector: 'app-apinward-search',
  templateUrl: './apinward-search.component.html',
  styleUrls: ['./apinward-search.component.scss']
})
export class APInwardSearchComponent implements OnInit {

  selectDropdown: any; 

  displayedColumns1: string[] = ['apname', 'bname', 'bcode', 'rmname', 'rmcode', 'constitution', 'aname', 'cdate', 'status', 'action']; 

  dataSourceRefferals = new MatTableDataSource<RefferalsDetails>(ELEMENT_DATA1);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceRefferals.paginator = this.paginator;
  }

}
