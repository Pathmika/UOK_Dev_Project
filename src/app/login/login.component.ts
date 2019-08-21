import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  role: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onUserLogIn(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;
    this.role = form.value.role;

    this.authService.loginUser(this.username, this.password, this.role);
  }
}
