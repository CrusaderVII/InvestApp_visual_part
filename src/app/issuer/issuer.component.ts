import { Component, OnInit} from '@angular/core';
import { IssuerService } from '../services/IssuerService';

@Component({
  selector: 'issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit{
  public issuer: Issuer = new Issuer();
  private apiServerURL = 'http://localhost:8070/investapp.com/issuer/'

  constructor (private service: IssuerService){}

  ngOnInit() {
    this.getIssuerNow()
  }

  public getIssuerNow(): void {
    this.service.getIssuerNow('GAZP').subscribe(
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