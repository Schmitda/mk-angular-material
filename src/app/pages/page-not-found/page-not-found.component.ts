import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'tm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  public countback = 5;
  public timer;

  constructor() {
  }

  ngOnInit() {

    this.timer = setInterval(() => {
      this.countback--;
      if (this.countback <= 0) {
        window.location.href = '/home';
        clearInterval(this.timer);
      }

    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
