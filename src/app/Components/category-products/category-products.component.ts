import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatService } from 'src/app/serves/cat.service';
import { CartService } from 'src/app/serves/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/serves/wishlist.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SerchPipe } from '../../pips/serch.pipe';

@Component({
  selector: 'app-category-products',
  standalone: true,
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
  imports: [CommonModule, RouterLink, SerchPipe],
})
export class CategoryProductsComponent {
  products: any[] = [];
  wish: any[] = [];
  catname: any;

  constructor(
    private _CatService: CatService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _WishListService: WishlistService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let id: string = '';
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        id = param.get('id') || '';
        console.log(id);
      },
    });
    this._CatService.getProductsByCat('category', id).subscribe({
      next: (response) => {
        this.products = response.data;
        this.catname = response.data;
        console.log(this.catname);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._WishListService.getwishlist().subscribe({
      next: (res) => {
        const newdata = res.data.map((item: any) => item._id);
        this.wish = newdata;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addToCart(productId: string) {
    this._CartService.addtocart(productId).subscribe({
      next: (response) => {
        this._CartService.cartitems.next(response.numOfCartItems);
        console.log(response);
        this._ToastrService.success(response.message, '', {
          timeOut: 2500,
          closeButton: true,
          progressBar: true,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addToWish(id: string) {
    this._WishListService.addwishlist(id).subscribe({
      next: (res) => {
        console.log(res);
        this.wish = res.data;
        this._WishListService.wishitems.next(res.data.length);
        this._ToastrService.success(res.message, '', {
          timeOut: 2500,
          closeButton: true,
          progressBar: true,
        });
      },
    });
  }
  deletefromWish(id: string) {
    this._WishListService.removeItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.wish = res.data;
        this._WishListService.wishitems.next(res.data.length);
        this._ToastrService.error(res.message, '', {
          timeOut: 2500,
          closeButton: true,
          progressBar: true,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
