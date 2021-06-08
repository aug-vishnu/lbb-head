import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-payment-card-info',
  templateUrl: './payment-card-info.component.html',
  styleUrls: ['./payment-card-info.component.scss']
})
export class PaymentCardInfoComponent implements OnInit {

  constructor() { }

  isToggled = false
  ngOnInit(): void {
    $(document).ready(function () {
      $('.radio-group .radio').click(function () {
        $('.selected .fa').removeClass('fa-check');
        $('.radio').removeClass('selected');
        $(this).addClass('selected');
      });
    });
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
