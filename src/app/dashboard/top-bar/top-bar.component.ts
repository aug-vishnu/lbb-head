
import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    // this.detail_shop()
  }

  Shop;

  logOut() {
    localStorage.removeItem('token')
  }
}
