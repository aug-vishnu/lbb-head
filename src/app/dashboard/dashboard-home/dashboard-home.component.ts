
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private router: Router,) { }
  ngOnInit() {


  }


}
