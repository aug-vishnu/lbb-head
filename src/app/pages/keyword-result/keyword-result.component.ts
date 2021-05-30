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
  rowStyle = { background: 'black' };

  getRowClass = params => {
    if (params.node.rowIndex > 0) {
      return 'my-shaded-effect';
    };
  }


  rowClassRules = {
    'sick-days-warning': function (params) {
      var numSickDays = params.data.sickDays;
      return numSickDays > 5 && numSickDays <= 7;
    },
    'sick-days-breach': 'data.sickDays >= 8',
  };

  rowSelection = 'multiple';
  defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };
  columnDefs = [
    {
      headerName: 'Google Search',
      field: 'google_search',
      minWidth: 200,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { field: 'content_snippet', minWidth: 200, headerName: 'Content Snippet', },
    { field: 'volume' },
    { field: 'AIT' },
    { field: 'value', },
    // {
    //   field: '', width: 100, cellRenderer: function (params) {
    //     return '<span><i class="ti-bar-chart-alt menu-icon"></i></span>';
    //   }
    // },
  ];

  rowData = [
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Celica', AIT: 35000, value: '$35 USD' },
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Boxter', AIT: 72000, value: '$72 USD' }
  ];

  onQuickFilterChanged() {
    this.gridApi.setQuickFilter((<HTMLInputElement>document.getElementById('quickFilter')).value);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
