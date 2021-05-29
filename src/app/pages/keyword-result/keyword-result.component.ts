import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyword-result',
  templateUrl: './keyword-result.component.html',
  styleUrls: ['./keyword-result.component.scss']
})
export class KeywordResultComponent implements OnInit {
  ngOnInit() { }

  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowSelection;
  rowData: any = [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        minWidth: 180,
        headerCheckboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
      },
      { field: 'age' },
      {
        field: 'country',
        minWidth: 150,
      },
      { field: 'year' },
      {
        field: 'date',
        minWidth: 150,
      },
      {
        field: 'sport',
        minWidth: 150,
      },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
    this.rowSelection = 'multiple';
  }

  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(document.getElementById('quickFilter'));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = [{
      age: 23,
      athlete: "Michael Phelps",
      bronze: 0,
      country: "United States",
      date: "24/08/2008",
      gold: 8,
      silver: 0,
      sport: "Swimming",
      total: 8,
      year: 2008,
    },
    {
      age: 23,
      athlete: "Michael Phelps",
      bronze: 0,
      country: "United States",
      date: "24/08/2008",
      gold: 8,
      silver: 0,
      sport: "Swimming",
      total: 8,
      year: 2008,
    }, {
      age: 23,
      athlete: "Michael Phelps",
      bronze: 0,
      country: "United States",
      date: "24/08/2008",
      gold: 8,
      silver: 0,
      sport: "Swimming",
      total: 8,
      year: 2008,
    }, {
      age: 23,
      athlete: "Michael Phelps",
      bronze: 0,
      country: "United States",
      date: "24/08/2008",
      gold: 8,
      silver: 0,
      sport: "Swimming",
      total: 8,
      year: 2008,
    }, {
      age: 23,
      athlete: "Michael Phelps",
      bronze: 0,
      country: "United States",
      date: "24/08/2008",
      gold: 8,
      silver: 0,
      sport: "Swimming",
      total: 8,
      year: 2008,
    },]
    // this.http
    //   .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //   .subscribe((data) => {
    //     this.rowData = data;
    //     console.log(data);

    //   });
  }
}
