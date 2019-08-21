import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { User } from "./user.model";

export class AuthService {
  private isAuthenticated = false;
  private token: string;

  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }

  authenticateUser(user) {}

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(username: string, password: string, role: string) {
    const user = {
      username: username,
      password: password,
      role: role
    };
    return this.http
      .post<{ token: string; username: string; role: string; userId: string }>(
        "http://localhost:3000/api/user/login",
        user
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;

        if (token) {
          this.isAuthenticated = true;
          if (response.role == "admin") {
            this.router.navigate(["/admin/"]);
          } else if (response.role == "customer") {
            this.router.navigate(["/"]);
          }
        }
      });
  }
}
