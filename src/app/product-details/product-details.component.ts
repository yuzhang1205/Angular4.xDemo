import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Comment} from '../share/product.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // ss: FormControl = new FormControl();
  product: Product;
  comments: Comment[];
  private isPublishComment = true;
  newRating = 0;
  newComment: string;
  isWatched = false;
  currentBid: number;

  constructor(private routeInfo: ActivatedRoute,
              private productSercive: ProductService) {
    /*this.ss.valueChanges.debounceTime(500).subscribe((dd) => {
      console.log(dd);
    });*/
  }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.productSercive.getProduct(productId).subscribe(product => {
      this.product = product;
      this.currentBid = product.Rating;
    });
    this.productSercive.getComments(productId).subscribe(comments => {
      this.comments = comments;
    });
  }

  addComment() {
    // 7, 1, '2017-12-19', 'zy', 3, 'nice music,挺好听的歌曲。'
    let comment = new Comment(this.product.Id, this.product.Id, new Date().toDateString(), 'zyf', this.newRating, this.newComment);
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.Rating = sum / this.comments.length;
    this.newRating = 0;
    this.newComment = '';
    this.isPublishComment = true;
  }

  watchProduct() {
    this.isWatched = !this.isWatched;
    this.currentBid = 1;
  }
}
