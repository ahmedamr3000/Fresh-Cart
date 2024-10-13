import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HomeServeService } from 'src/app/serves/home-serve.service';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/serves/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detils',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './detils.component.html',
  styleUrls: ['./detils.component.scss'],
})
export class DetilsComponent implements OnInit {
  constructor(
    private _HomeServeService: HomeServeService,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService,
    private toster: ToastrService
  ) {}

  data: any = {};
  imges: [] = [];
  id: any;

  ngOnInit() {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        this._HomeServeService.getPesificProduct(this.id).subscribe({
          next: (response) => {
            this.data = response.data;
            this.imges = response.data.images;
            console.log(this.id);
          },
        });
      },
    });
  }

  categorySliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  addCart(id: any): void {
    this._CartService.addtocart(id).subscribe({
      next: (response) => {
        this.toster.success('product added to cart');
        this._CartService.cartitems.next(response.numOfCartItems);
      },
    });
  }
}
