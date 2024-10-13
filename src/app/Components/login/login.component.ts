import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GlobalServiceService } from 'src/app/serves/global-service.service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _GlobalServiceService: GlobalServiceService,
    private _Router: Router
  ) {}

  message = '';
  disabled: false | undefined;
  isloading: boolean = false;

  loginForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
    ],
  });

  SubmitLogin(): void {
    if (this.loginForm.valid == true) {
      this.isloading = true;
      console.log('hello');

      this._GlobalServiceService.setLogin(this.loginForm.value).subscribe({
        next: (response) => {
          this.isloading = false;

          if (response.message == 'success') {
            console.log('no');

            localStorage.setItem('etoken', response.token);
            this._Router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isloading = false;

          this.message = err.error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  Forget(): void {
    this._Router.navigate(['/forget']);
  }
}
