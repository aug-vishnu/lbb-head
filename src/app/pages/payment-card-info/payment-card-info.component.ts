import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-payment-card-info',
  templateUrl: './payment-card-info.component.html',
  styleUrls: ['./payment-card-info.component.scss']
})
export class PaymentCardInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.radio-group .radio').click(function () {
        $('.selected .fa').removeClass('fa-check');
        $('.radio').removeClass('selected');
        $(this).addClass('selected');
      });
    });
  }

}
