import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GlobalServiceService } from 'src/app/serves/global-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatStepperModule,
  StepperOrientation,
} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-regester',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss'],
})
export class RegesterComponent {
  isloading: boolean = false;
  isLinear = true;
  data: any;
  constructor(
    private _FormBuilder: FormBuilder,
    private _GlobalServiceService: GlobalServiceService,
    private _Router: Router
  ) {}

  firstFormGroup: FormGroup = this._FormBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
  });
  secondFormGroup: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });
  thirdFormGroup: FormGroup = this._FormBuilder.group(
    {
      password: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
      ],
      rePassword: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
      ],
    },
    { validators: [this.coparepassword] as FormControlOptions }
  );
  fourthFormGroup: FormGroup = this._FormBuilder.group({
    phone: [
      '',
      [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
    ],
  });

  handel() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.thirdFormGroup.valid &&
      this.fourthFormGroup.valid
    ) {
      this.isloading = true;
      this._GlobalServiceService
        .sendproduct({
          name: this.firstFormGroup.value.name,
          email: this.secondFormGroup.value.email,
          password: this.thirdFormGroup.value.password,
          rePassword: this.thirdFormGroup.value.rePassword,
          phone: this.fourthFormGroup.value.phone,
        })
        .subscribe({
          next: (response) => {
            if (response.message == 'success') {
              this.isloading = false;

              this._Router.navigate(['/login']);
            }
          },
          error: (err) => {
            this.isloading = false;
            console.log(err);
          },
        });
    } else {
    }
  }

  coparepassword(group: FormGroup): void {
    let password = group.get('password');
    let rePassword = group.get('rePassword');
    if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ match: true });
    }
  }
}
