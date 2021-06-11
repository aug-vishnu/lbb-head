import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
