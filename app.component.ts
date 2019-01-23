import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {}
  newCake: any;
  allCake: any;
  selectedCake: any;

  ngOnInit() {
    this.newCake = {baker:"", url:""};
    this.getCakesFromService();
  }

  showCake(selectedCake) {
    this.selectedCake=selectedCake;
    console.log('one cake!');
  }

  getCakesFromService() {
    this._httpService.getCakes().subscribe(data => {
      this.allCake = data;
      console.log("Cake", data);
    })
  }

  bakeCake() {
    this._httpService.bakeCakes(this.newCake).subscribe(added => {
      console.log('added ' + added);
    })
    console.log('cakes!')
  }


}
/*
original code before oninit added
export class AppComponent {
  title = 'Ninja Gold';
  constructor(private _httpService: HttpService) {}
}*/
