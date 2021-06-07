
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
    var body = $('body');
    // this.detail_shop()
    $('[data-toggle="minimize"]').on("click", function () {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });
  }

  Shop;

  logOut() {
    localStorage.removeItem('token')
  }

  toggleNav() {
    console.log("asd");
  }
}
