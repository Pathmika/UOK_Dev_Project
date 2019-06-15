import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "../login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usernameAdmin: string = "Pathmika";
  passwordAdmin: string = "pwd";
  usernameCust: string = "Nimal";
  passwordCust: string = "pwdn";
  directResult: boolean = false;

  constructor(public loginservice: LoginService) {}

  ngOnInit() {}
  onUserLogIn(loginForm: NgForm) {
    if (
      loginForm.value.username == this.usernameAdmin &&
      loginForm.value.password == this.passwordAdmin
    ) {
      this.directResult = false;
      this.loginservice.checkLoginLogout("logged", loginForm.value.username);
    } else if (
      loginForm.value.username == this.usernameCust &&
      loginForm.value.password == this.passwordCust
    ) {
      this.directResult = true;
      this.loginservice.checkLoginLogout("logged", loginForm.value.username);
    }
  }
}
