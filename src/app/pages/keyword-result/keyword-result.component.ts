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
  rowCount = 0;
  gridColumnApi;

  getRowClass = params => {
    if (params.node.rowIndex > 4) {
      return 'premium';
    };
  }

  rowSelection = 'multiple';
  defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: false,
  };
  columnDefs = [
    {
      headerName: 'Google Search',
      field: 'google_search',
      minWidth: 400,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      cellClass: 'content-snippet',
      cellStyle: { 'font-weight': '800' }
    },
    { field: 'content_snippet', minWidth: 500, headerName: 'Content Snippet', },
    { field: 'volume' },
    { field: 'AIT' },
    { field: 'value', },
    {
      field: '', minWidth: 10, cellRenderer: function (params) {
        return '';
      }, cellClass: 'options'
    },
  ];

  rowData = [
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Celica', AIT: 35000, value: '$35 USD' },
    { google_search: 'How to learn provide a robust synopsi', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to learn provide a robust synopsi', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to provide a robust synopsi music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to provide a robust synopsiprovide a robust synopsi music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
    { google_search: 'How to learn music', content_snippet: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Aproaches to collaborative...', volume: 'Mondeo', AIT: 32000, value: '$32 USD' },
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
  onSelectionChanged(event) {
    this.rowCount = event.api.getSelectedNodes().length;
  }
}
