import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleThing() {
    var body = $('body');
    console.log("Toogled");
  }
}
