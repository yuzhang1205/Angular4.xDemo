import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  private stars: boolean[];
  @Input()
  private rating = 0;
  @Input()
  private readonly = true;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(this.rating < i);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }


}
