import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}

  headers: any = { token: localStorage.getItem('etoken') };

  wishitems: BehaviorSubject<number> = new BehaviorSubject(0);

  addwishlist(proctId: any): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/wishlist',
      {
        productId: proctId,
      },
      {
        headers: this.headers,
      }
    );
  }

  getwishlist(): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/wishlist',
      {
        headers: this.headers,
      }
    );
  }

  removeItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        headers: this.headers,
      }
    );
  }
}
