import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../share/product.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Observable<Product[]>;

  /* private keywords: string;
   private musicFilter: FormControl = new FormControl();*/

  constructor(private productSercive: ProductService) {
    /*this.musicFilter.valueChanges.debounceTime(500).subscribe(
      value => this.keywords = value
    );*/
  }

  ngOnInit() {
    this.products = this.productSercive.getProducts();
    this.productSercive.searchEvent.subscribe(params => this.products = this.productSercive.serch(params));
  }

}


