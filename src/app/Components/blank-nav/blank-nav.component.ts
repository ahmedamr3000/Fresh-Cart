import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from 'src/app/serves/cart.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { WishlistService } from 'src/app/serves/wishlist.service';

@Component({
  selector: 'app-blank-nav',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule, FormsModule],
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.scss'],
})
export class BlankNavComponent implements OnInit {
  num: any;
  wish: any;

  constructor(
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}
  remove(): void {
    localStorage.removeItem('etoken');
  }
  @ViewChild('navbar') navElment!: ElementRef;
  @HostListener('window:scroll')
  onscroll(): void {
    if (window.scrollY > 300) {
      this._Renderer2.addClass(this.navElment.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navElment.nativeElement, 'shadow');
      this._Renderer2.addClass(this.navElment.nativeElement, 'pos');
    } else {
      this._Renderer2.removeClass(this.navElment.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navElment.nativeElement, 'shadow');
      this._Renderer2.removeClass(this.navElment.nativeElement, 'pos');
    }
  }

  ngOnInit(): void {
    this._CartService.getusercart().subscribe({
      next: (resonse) => {
        this._CartService.cartitems.next(resonse.numOfCartItems);
      },
    });
    this._WishlistService.getwishlist().subscribe({
      next: (respn) => {
        this._WishlistService.wishitems.next(respn.count);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._CartService.cartitems.subscribe({
      next: (response) => {
        this.num = response;
      },
    });

    this._WishlistService.wishitems.subscribe({
      next: (response) => {
        this.wish = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
