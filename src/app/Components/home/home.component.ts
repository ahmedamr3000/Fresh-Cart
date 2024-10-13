import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServeService } from 'src/app/serves/home-serve.service';
import { RouterModule } from '@angular/router';
import { Text2Pipe } from 'src/app/pips/text2.pipe';
import { Product } from 'src/app/interface/product';
import { SerchPipe } from 'src/app/pips/serch.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from 'src/app/serves/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishlistService } from 'src/app/serves/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    Text2Pipe,
    SerchPipe,
    FormsModule,
    NgxPaginationModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  num: any;
  wish: any[] = [];
  loader: boolean = true;

  constructor(
    private _HomeServeService: HomeServeService,
    private _CartService: CartService,
    private toster: ToastrService,
    private _WishlistService: WishlistService
  ) {}
  categorySliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  mainSliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
  };
  searchTerm: string = '';
  products: Product[] = [];
  categeries: any[] = [];

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
        this.loader = false;
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
