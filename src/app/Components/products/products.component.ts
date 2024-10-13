import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/serves/cart.service';
import { HomeServeService } from 'src/app/serves/home-serve.service';
import { WishlistService } from 'src/app/serves/wishlist.service';
import { Product } from 'src/app/interface/product';
import { SerchPipe } from '../../pips/serch.pipe';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, SerchPipe, RouterLink, NgxPaginationModule],
})
export class ProductsComponent {
  constructor(
    private _HomeServeService: HomeServeService,
    private _CartService: CartService,
    private toster: ToastrService,
    private _WishlistService: WishlistService
  ) {}
  searchTerm: string = '';
  products: Product[] = [];
  categeries: any[] = [];
  num: any;
  wish: any[] = [];

  itemsPerPage: number = 0;
  currentPage: number = 1;
  totalItems: number = 0;
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

  addwishlist(id: any): void {
    this._WishlistService.addwishlist(id).subscribe({
      next: (response) => {
        this.toster.success(response.message, '', {
          timeOut: 2500,
          closeButton: true,
          progressBar: true,
        });
        this._WishlistService.wishitems.next(response.data.length);
        this.wish = response.data;
      },
    });
  }

  ngOnInit(): void {
    this._HomeServeService.getAllProduct().subscribe({
      next: (response) => {
        this.products = response.data;
        this.currentPage = response.metadata.currentPage;
        this.itemsPerPage = response.metadata.limit;
        this.totalItems = response.results;
      },
    });

    this._HomeServeService.getCategoris().subscribe({
      next: (response) => {
        this.categeries = response.data;
      },
    });

    this._WishlistService.getwishlist().subscribe({
      next: (response) => {
        const newData = response.data.map((item: any) => item._id);

        this.wish = newData;
      },
    });
  }

  pageChanged(event: any): void {
    this._HomeServeService.getAllProduct(event).subscribe({
      next: (response) => {
        this.products = response.data;
        this.currentPage = response.metadata.currentPage;
        this.itemsPerPage = response.metadata.limit;
        this.totalItems = response.results;
      },
    });
  }

  removewishlist(id: string): void {
    this._WishlistService.removeItem(id).subscribe({
      next: (response) => {
        this._WishlistService.wishitems.next(response.data.length);
        this.wish = response.data;
        this.toster.success(response.message, '', {
          timeOut: 2500,
          closeButton: true,
          progressBar: true,
        });
      },
    });
  }
}
