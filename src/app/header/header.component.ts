import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  buttonStatus: boolean;
  currentUser: string;
  constructor(public loginService: LoginService) {}

  ngOnInit() {
    this.buttonStatus = this.loginService.getShowButton();
    this.currentUser=this.loginService.getUser();
  }
}
