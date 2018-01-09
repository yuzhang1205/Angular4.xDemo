import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../share/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  private categories: string[];

  constructor(private productSercives: ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      Music: ['', Validators.minLength(2)],
      Singer: ['', Validators.minLength(2)],
      Category: ['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productSercives.getAllCategories();
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    let price = parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return {positiveNumber: true};
    }
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.productSercives.searchEvent.emit(this.formModel.value);
    }
  }
}
