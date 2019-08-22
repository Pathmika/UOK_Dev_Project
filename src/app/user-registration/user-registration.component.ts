import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onAddCustomer(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (form.value.password != form.value.cpassword) {
      console.log("Mismatch password");
      return;
    }
    const customer = {
      fname: form.value.cfname,
      lname: form.value.clname,
      username: form.value.username,
      password: form.value.password,
      nic: form.value.nic,
      address: form.value.address,
      telephone: form.value.telephone,
      email: form.value.email
    };
    this.authService.registerCustomer(customer);
  }
}
