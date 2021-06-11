import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  isLoaded: any = false
  /////////////////////////////////////////////////////////////////////////////////////////////
  // Fetching Shop Detail // Shop
  Shop: any;

  /////////////////////////////////////////////////////////////////////////////////////////////
  prviousNav = 1
  toValhalla(nav) {
    var element = $('ul#sidebarnav a')
    element.parentsUntil(".sidebar-nav").each(function (index) {
      if ($(this).is("li") && $(this).children("a").length !== 0) {
        $(this).children("a").addClass("active");
        $(this).parent("ul#sidebarnav").length === 0 ?
          $(this).removeClass("active") :
          $(this).removeClass("selected");
      } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
        $(this).removeClass("selected");

      } else if ($(this).is("ul")) {
        $(this).removeClass('in');
      }
    });
    $("#main-wrapper").toggleClass("show-sidebar");
    $(".nav-toggler i").toggleClass("ti-menu");

    $(".nav" + nav).addClass("selected");
    $(".nav" + this.prviousNav).removeClass("selected");
    if (this.prviousNav == nav) {
      this.prviousNav = nav
    }    // this.router.navigate([route])
  }


  /////////////////////////////////////////////////////////////////////////////////////////////
  // localStorage.setItem('user_type',this.Details.user_type)

  logOut() {
    localStorage.removeItem('token')
    window.location.reload()
  }
  /////////////////////////////////////////////////////////////////////////////////////////////

}
