import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }



  title = 'workflexi-head';
  isValidated = false
  Factor: any = new Object()
  ngOnInit(): void {
    this.isValidated = false
    window.scrollTo(0, 0)

  }

  submit_form(form: NgForm) {
    console.log(form);
    this.isValidated = true
    window.scrollTo(0, 0)
  }
}
