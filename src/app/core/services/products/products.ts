import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { EndPoint } from '../../enums/endpoint';
import { Product, ProductsResponse } from '../../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private readonly httpClient = inject(HttpClient);

  getAllProducts(): Observable<ProductsResponse> {
    return this.httpClient.get<ProductsResponse>(
      `${environment.baseApiUrl}${EndPoint.PRODUCT}`
    ).pipe(shareReplay(1));
  }
  createNewProduct(product: Product): Observable<ProductsResponse> {
    return this.httpClient.post<ProductsResponse>(
      `${environment.baseApiUrl}${EndPoint.PRODUCT}`,
      product
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(
      `${environment.baseApiUrl}${EndPoint.PRODUCT}/${id}`
    );
  }
}
