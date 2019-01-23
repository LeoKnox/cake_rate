import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() cake: any;
  newRating: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newRating = {stars:1, comments:""};
  }

  rateCake() {
    const observer = this._httpService.sendRating(this.cake, this.newRating);
    observer.subscribe(data => {
      console.log(data);
    })
    console.log('I see stars')
  }

}
