import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServiceService } from '../_service/service.service';
import * as moment from 'moment';
@Component({
  selector: 'app-stockhistory',
  templateUrl: './stockhistory.component.html',
  styleUrls: ['./stockhistory.component.scss']
})
export class StockhistoryComponent implements OnInit {
  public isRecordFound = false;
  public closingDataObject: any = {};
  public symbolsArray: any = [];
  public isStockDetailsVisible = false;
  symbolValue = new FormControl();
  dateValue = new FormControl();
  filteredOptions: Observable<string[]>;
  constructor(public serviceService: ServiceService) { }
  ngOnInit() {
    this.isStockDetailsVisible = false;
    this.serviceService.getSymbolsApi('ref-data/symbols').subscribe(data => {
      this.gerSymbolsArray(data);
    }, error => {
      console.log(error);
    });
  }
  change() {
    console.log(this.symbolValue.value);
    this.filteredOptions = this.symbolsArray.filter(option => option.toLowerCase().includes(this.symbolValue.value));

    console.log(this.filteredOptions);
  }
  private _filter(value: string): string[] {
    console.log(value);
    const filterValue = value.toLowerCase();
    return this.symbolsArray.filter(option => option.toLowerCase().includes(filterValue));
  }
  public submitForm() {
    const valluesPair = { symbol: this.symbolValue.value, date: moment(this.dateValue.value).format('YYYYMMDD') };
    console.log(valluesPair);
    this.serviceService.getSymbolsApi('stock/' + this.symbolValue.value + '/chart/date/' + valluesPair.date).subscribe(data => {
      this.getClosingPriceOfTheDay(data);
    }, error => {
      console.log(error);
    });
  }
  public gerSymbolsArray(symbolsValue) {
    symbolsValue.forEach((element, index) => {
      if (index < 50) {
        this.symbolsArray.push(element.symbol);
      }
    });
    this.filteredOptions = this.symbolsArray;
  }
  public getClosingPriceOfTheDay(closingPrice) {
    if (closingPrice.length) {
      this.isRecordFound = false;
      this.closingDataObject = closingPrice[closingPrice.length - 1];
    } else {
      this.isStockDetailsVisible = true;
      this.isRecordFound = true;
    }
  }
}
