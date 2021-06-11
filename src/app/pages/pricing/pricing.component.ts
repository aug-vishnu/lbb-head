import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  isToggled = false
  ngOnInit(): void {
    this.isToggled = false
  }
  toggleThing(x) {

    this.isToggled = !this.isToggled
    if (x == 1) {
      $('.radio-one').addClass('active')
      $('.radio-two').removeClass('active')
    }
    if (x == 2) {
      $('.radio-two').addClass('active')
      $('.radio-one').removeClass('active')
    }

  }
}
