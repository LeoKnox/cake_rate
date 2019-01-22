import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {}
  cakes = [];

  ngOnInit() {
    this.getCakesFromService();
  }
  
  getCakesFromService() {
    this._httpService.getCakes().subscribe(data => {
      this.cakes = data;
      console.log("Cake", data);
    })
  }
}
/*
original code before oninit added
export class AppComponent {
  title = 'Ninja Gold';
  constructor(private _httpService: HttpService) {}
}*/
