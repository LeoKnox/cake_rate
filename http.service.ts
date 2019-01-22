import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http:HttpClient) {
    this.getCakes();
  }
  
  getCakes() {
    let tempObservable = this._http.get('/');
    tempObservable.subscribe(data => console.log("Got out cakes!", data));
  }
}
