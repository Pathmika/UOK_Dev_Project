import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class LoginService {
  show: boolean = true;
  cuser: string;
  constructor(http: HttpClient) {}

  checkLoginLogout(status: string, user: string) {
    if (status == "logged") {
      this.show = false;
    } else {
      this.show = true;
    }
    this.cuser = user;
  }

  getShowButton() {
    return this.show;
  }
  getUser() {
    return this.cuser;
  }
}
