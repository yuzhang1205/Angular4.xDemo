import {EventEmitter, Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProductService {

  searchEvent: EventEmitter<PeoductSearchParams> = new EventEmitter<PeoductSearchParams>();

  constructor(private http: Http) {
  }

  getAllCategories(): string[] {
    return ['流行', '酷炫', '浪漫', '古典', '快歌'];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('api/products').map((res) => res.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('api/products/' + id).map(res => res.json());
  }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get('api/products/ ' + id + '/comments').map(res => res.json());
  }

  serch(params: PeoductSearchParams): Observable<Product[]> {
    return this.http.get('api/products', {search: this.encodeParams(params)}).map(res => res.json());
  }

  private encodeParams(params: PeoductSearchParams) {
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
  }
}

export class Product {
  constructor(public Id: number,
              public Music: string,
              public Singer: string,
              public Rating: number,
              public Description: string,
              public Categories: Array<string>) {
  }

}

export class Comment {
  constructor(public  id: number, public  productId: number, public timestamp: string,
              public user: string, public rating: number, public content: string) {
  }
}

export class PeoductSearchParams {
  constructor(public  music: string, public  singer: string, public category: string) {
  }
}



