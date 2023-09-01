import { Component, OnInit} from '@angular/core';
import { IssuerService } from '../services/IssuerService';

@Component({
  selector: 'issuer',
  template:`
  <header class="issuer-header">
    <div class="right-box">
      <div class="company-name">
        <h1 class="ticker">{{issuer.secId}}</h1>
        <h1 class="name">{{issuer.fullName}}</h1>
      </div>
      <div class="price">
        <h1 class="amount">{{issuer.priceNow}}</h1>
        <h1 class="percent">{{issuer.percent}}%</h1>
      </div>
    </div>
  </header>
`,
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit{
  public issuer: Issuer;

  constructor (private issuerService: IssuerService){}

  ngOnInit() {
    this.getIssuerNow
  }

  public getIssuerNow(): void {
    this.issuerService.getIssuerNow('GAZP').subscribe(
      (response: Issuer) => {
        this.issuer = response
      }
    );
  }

  // issuer: Issuer = {
  //   secId: 'GAZP',
  //   fullName: 'Газпром ао',
  //   priceLow: 0,
  //   priceHigh: 0,
  //   priceOpen: 0,
  //   date: '2023-08-31 19:44:44',
  //   priceNow: 175.6,
  //   percent: 0.32
  // };
  
}

export class Issuer {
  secId: string;
	fullName: string;
	priceLow: number;
	priceHigh: number;
	priceNow: number;
	priceOpen: number;
	percent: number;
  date: string;
}