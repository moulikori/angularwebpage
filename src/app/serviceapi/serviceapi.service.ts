import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstant } from '../app.commn';
import { environment } from '../env/environment';
import { Product } from '../page/product/productdetial';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  apiUrl = `${environment.apiEndpoint}${appConstant.apiRoute.products}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
