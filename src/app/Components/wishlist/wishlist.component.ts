import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/serves/cart.service';
import { RouterLink } from '@angular/router';
import { WishlistService } from 'src/app/serves/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _WishlistService: WishlistService,
    private toster: ToastrService
  ) {}
  cartDetails: any = null;

  removewishlist(id: string): void {
    this._WishlistService.removeItem(id).subscribe({
      next: (response) => {
        this._WishlistService.wishitems.next(response.data.length);

        this.cartDetails = response.data;
        this.ngOnInit();
      },
    });
  }
  numOfCartItems!: number;
  ngOnInit(): void {
    this._WishlistService.getwishlist().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
      },
    });
  }
  addCart(id: any): void {
    this._CartService.addtocart(id).subscribe({
      next: (response) => {
        this.toster.success(response.message, '', {
          timeOut: 2500,
          closeButton: true,
          progressBar: true,
        });
        this._CartService.cartitems.next(response.numOfCartItems);
      },
    });
  }
}
