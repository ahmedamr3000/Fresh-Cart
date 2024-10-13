import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeServeService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProduct(pagenum: number = 1): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products?page=${pagenum}`
    );
  }

  getPesificProduct(para: any | undefined): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products/${para}`
    );
  }

  getCategoris(): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/categories'
    );
  }

  // getalldata() {
  // let observable1 = this._HttpClient.get(
  //   `https://ecommerce.routemisr.com/api/v1/products?page=${pagenum}`
  // );
  // let observable2 = this._HttpClient.get(
  //   `https://ecommerce.routemisr.com/api/v1/products/${para}`
  // );
  // let observable3 = this._HttpClient.get(
  //   'https://ecommerce.routemisr.com/api/v1/categories'
  // );
  // return forkJoin([observable1,observable2,observable3])
}
