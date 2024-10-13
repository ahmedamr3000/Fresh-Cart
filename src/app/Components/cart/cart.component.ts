import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/serves/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  cartDetails: any = null;
  changeCount(id: string, count: number): void {
    if (count > 0) {
      this._CartService.updateitems(id, count).subscribe({
        next: (response) => {
          this.cartDetails = response.data;
        },
      });
    }
  }
  removeCartItem(id: string): void {
    this._CartService.removeItem(id).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        this.numOfCartItems = response.numOfCartItems;
        this._CartService.cartitems.next(response.numOfCartItems);
      },
    });
  }
  numOfCartItems!: number;
  ngOnInit(): void {
    this._CartService.getusercart().subscribe({
      next: (response) => {
        this.numOfCartItems = response.numOfCartItems;
        this.cartDetails = response.data;
        console.log(response);
      },
    });
  }
  clear(): void {
    this._CartService.clear().subscribe({
      next: (resp) => {
        if (resp.message === 'success') {
          this.cartDetails = null;
          this._CartService.cartitems.next(0);
        }
      },
    });
  }
}
