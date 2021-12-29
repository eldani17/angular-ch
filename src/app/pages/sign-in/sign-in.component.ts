import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ["test@test.com", [Validators.required]],
      password: ["12345678", Validators.required],
    });
  }

  ngOnInit(): void {}

  handleLogin() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe((response) => {
      this.router.navigate(["home"]);
    });
  }
}
