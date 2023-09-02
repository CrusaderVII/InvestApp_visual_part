import { Component, OnInit} from '@angular/core';
import { IssuerService } from '../services/IssuerService';

@Component({
  selector: 'issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit{
  public issuer: Issuer = new Issuer();

  constructor (private service: IssuerService){}

  ngOnInit() {
    this.getIssuerNow()
  }

  public getIssuerNow(): void {
    this.service.getIssuerNow('AFLT').subscribe(
      (response: Issuer) => {
        this.issuer = response
      }
    );
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