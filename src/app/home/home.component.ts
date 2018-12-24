import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../_service/service.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getValue: any = [];
  array: any = [];
  array_sliced_response: any = [];
  dataLoaded = false;
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  dataSource: any = [];
  displayedColumns: string[] = ['Symbol', 'Name', 'Date', 'Enabled', 'Type', 'IexID'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public serviceService: ServiceService) {
    this.serviceService.getSymbolsApi('ref-data/symbols').subscribe(data => {
      this.dataLoaded = true;
      this.gerSymbolsArray(data);
    }, error => {
      console.log(error);
    });
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  public gerSymbolsArray(symbolsValue) {
    this.dataSource = new MatTableDataSource<any>(symbolsValue);
    this.appendItems(0, this.sum);
  }
  addItems(startIndex, endIndex, _method) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array[_method](this.dataSource.filteredData[i]);
    }
    this.array_sliced_response = this.array.slice(0);
  }
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev) {
    console.log('Down');
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    this.direction = 'down';
  }
}
