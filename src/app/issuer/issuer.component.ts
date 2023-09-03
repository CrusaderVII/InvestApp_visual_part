import { Component, OnInit} from '@angular/core';
import { IssuerService } from '../services/IssuerService';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit{
  public issuer: Issuer = new Issuer()
  public marketData: Array<Issuer> = []

  constructor (private service: IssuerService){
  }
  

  ngOnInit() {
    this.getIssuerNow()
  }

  public getIssuerNow(): void {
    this.service.getIssuerNow('YNDX').subscribe(
      (response: Issuer) => {
        this.issuer = response
      }
    );

    console.log(this.issuer)
  }
}

export class Issuer {
  shortName: string;
	fullName: string;
	priceLow: number;
	priceHigh: number;
	priceNow: number;
	priceOpen: number;
	percent: number;
  date: string;
}