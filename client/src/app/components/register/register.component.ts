import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { RestService } from "../../services/rest.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private restService: RestService) { }

  ngOnInit(): void {
  }

  message: string;
  registerForm = new FormGroup({
    fname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    lname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    eemail: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
    ]),
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  
  
  backToLogin() {
    this.router.navigate(["/login"]);
  }

  registerAcc() {
    if (this.registerForm.invalid) {
      alert("Form is invalid!");
      return;
    }
    console.log(this.registerForm.value)
    const accountInfo = this.registerForm.value;

    this.restService.register(accountInfo.fname, accountInfo.lname, accountInfo.eemail, accountInfo.username, accountInfo.password).subscribe(
      (res) => {
        console.log("register success");
        this.router.navigate(["/login"]);
      },
      (err) => {
        console.log("register failed")
        alert("Register failed, try again");
      }
    );
  }


}
