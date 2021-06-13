import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  constructor() { }
  Shop: any
  ngOnInit(): void {
    this.get_nav()
    // this.toValhalla(this.activeNav)
  }

  selectedProject: number = 1;
  projects = [
    { id: 1, name: 'Project Name' },
    { id: 2, name: 'Project Name' },
    { id: 3, name: 'Project Name' },
    { id: 4, name: 'Project Name' },
  ];

  activeNav: any
  async get_nav() {
    var value = localStorage.getItem('active_nav')
    // const { value } = await Storage.get({ key: 'active_nav' });
    this.activeNav = value

    var location = window.location.href.split('/');
    console.log(location[3]);

    if (location[3] != 'dashboard') {
      this.toValhalla(value)
    }
    else {
      this.toValhalla(10)
    }
    console.log(value);
  }

  // /////////////////////////////////////////////////////////////////////////////////////////////
  prviousNav = 1
  toValhalla(nav) {
    var element = $('ul.nav .nav-item')


    // Storage.set({ key: 'active_nav', value: nav });
    localStorage.setItem('active_nav', nav)
    console.log("asd", nav, typeof (nav), typeof (this.activeNav));

    element.each(function (index) {
      if ($(this).is("li") && $(this).children("a").length !== 0) {
        $(this).children("a").addClass("active");
        $(this).parent("ul#sidebarnav").length === 0 ?
          $(this).removeClass("active") :
          $(this).removeClass("selected");

      }
    });
    $(".nav" + nav).addClass("active");
    // $(".nav" + this.activeNav).removeClass("active");
    // $(".sidebar").removeClass("active");

    if (this.activeNav == nav) {
      this.activeNav = nav
    }




  }
  // /////////////////////////////////////////////////////////////////////////////////////////////


}
