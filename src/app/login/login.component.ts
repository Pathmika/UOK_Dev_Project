import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usernameAdmin: string = "Pathmika";
  passwordAdmin: string = "pwd";
  usernameCust: string = "Cust";
  passwordCust: string = "pwdC";
  directResult: string;

  constructor() {}

  ngOnInit() {}
  onUserLogIn(loginForm: NgForm) {
    if (
      loginForm.value.username == this.usernameAdmin &&
      loginForm.value.password == this.passwordAdmin
    ) {
      this.directResult = "admin";
    } else if (
      loginForm.value.username == this.usernameCust &&
      loginForm.value.password == this.passwordCust
    ) {
      this.directResult = "cust";
    }
  }
}
