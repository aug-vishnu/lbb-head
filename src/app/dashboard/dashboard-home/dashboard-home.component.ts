
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [45, 39, 40, 41, 56, 55, 70], label: 'Articles' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation?: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#1ABE97',
      backgroundColor: '#1abe980e',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private router: Router,) { }
  ngOnInit() {


  }


}
