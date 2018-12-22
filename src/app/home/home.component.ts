import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../_service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getValue: any = [];
  array: any = [];
  dataLoaded = false;
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  constructor(public serviceService: ServiceService) {
    this.serviceService.getSymbolsApi('ref-data/symbols').subscribe(data => {
      this.dataLoaded = true;
      this.gerSymbolsArray(data);
    }, error => {
      console.log(error);
    });
   }
  ngOnInit() {
  }
  public gerSymbolsArray(symbolsValue) {
    this.getValue = symbolsValue;
    this.appendItems(0, this.sum);

  }
  addItems(startIndex, endIndex, _method) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array[_method](this.getValue[i]);
    }
  }
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown (ev) {
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    this.direction = 'down';
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);
    this.direction = 'up';
  }
}
