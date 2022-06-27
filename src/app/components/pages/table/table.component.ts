import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  contatos: any;
  

  constructor() { 
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData() {
    let data:any = localStorage.getItem('contatos');
    this.contatos = JSON.parse(data);
    console.table(this.contatos)
  }

}
