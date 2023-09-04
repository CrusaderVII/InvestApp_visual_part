import { AfterViewInit, Component, OnInit} from '@angular/core';
import { IssuerService } from '../services/IssuerService';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css'], 
})
export class IssuerComponent implements OnInit{
  public issuer: Issuer = new Issuer()

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