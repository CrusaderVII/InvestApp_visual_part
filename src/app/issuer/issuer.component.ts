import { AfterViewInit, Component, OnInit} from '@angular/core';
import { IssuerService } from '../services/IssuerService';
import { RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { timer } from 'rxjs';


@Component({
  selector: 'issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css'], 
})
export class IssuerComponent implements OnInit{
  public issuer: Observable<Issuer>

  constructor (private service: IssuerService){} 
  

  ngOnInit() {
    this.issuer = timer(0, 1500).pipe(
      switchMap(() => this.service.getIssuerNow('GAZP'))
    )
  }

  public getIssuerNow(): void {
    

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

export class IssuerMetadata {
  shortName: string;
  fullName: string;
}