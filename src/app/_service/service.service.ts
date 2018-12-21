import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { baseurl } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  options = new HttpHeaders({ 'content-type': 'application/json' });
  constructor(public Httpclient: HttpClient, ) { }
  getSymbolsApi(url: any): Observable<any> {
    console.log('123456' + url);
    return this.Httpclient.get<any>(baseurl + url, { headers: this.options }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return  throwError(error);
 }
}
