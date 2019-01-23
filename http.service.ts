import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http:HttpClient) {
    this.getCakes();
  }
  
  getCakes() {
    return this._http.get('/cake');
  }

  bakeCakes(newcake) {
    console.log(newcake);
    return this._http.post('/cake', newcake);
  }

  sendRating(id, rating) {
    return this._http.patch('/cake/' + id, rating);
  }
}
