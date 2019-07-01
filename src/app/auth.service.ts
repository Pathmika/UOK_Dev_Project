import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

export class AuthService {
  private isAuthenticated = false;
  private token: string;

  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }

  constructor(private http: HttpClient, private router: Router) {}
}
