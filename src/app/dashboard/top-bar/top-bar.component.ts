
import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }
  innerWidth
  ngOnInit(): void {
    this.onResize(event)
    var body = $('body');
    // this.detail_shop()
    $('[data-toggle="minimize"]').on("click", function () {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    this.innerWidth = window.innerWidth;
    console.log("o", innerWidth);
  }

  Shop;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log("o", innerWidth);
    if (this.innerWidth < 1200) {
      var body = $('body');
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }

    }
  }
  logOut() {
    localStorage.removeItem('token')
  }

  toggleNav() {
    console.log("asd");
  }
}
