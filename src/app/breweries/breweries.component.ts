import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  breweries: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBreweries().subscribe(data => {
      this.breweries = data;
      console.log(this.breweries);
    });
  }

}
