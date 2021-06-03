import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(".form-control").after("add your smiley here");
  }

}
