import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/serves/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService
  ) {}
  id: any;

  checkout: FormGroup = this._FormBuilder.group({
    details: [''],
    phone: [''],
    city: [''],
  });

  sendcheckout(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (resp) => {
        this.id = resp.get('id');

        this._CartService.senddata(this.checkout.value, this.id).subscribe({
          next: (response) => {
            window.open(response.session.url, '_self');
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
}
