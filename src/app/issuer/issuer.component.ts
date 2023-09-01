import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'issuer',
  template:`
  <header class="issuer-header">
    <div class="right-box">
      <div class="company-name">
        <h1 class="ticker">{{issuer.shortName}}</h1>
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
  public issuer: Issuer = new Issuer();
  private apiServerURL = 'http://localhost:8070/investapp.com/issuer/'

  constructor (private client: HttpClient){}

  ngOnInit() {
    this.getIssuerNow()
  }

  public getIssuerNow(): void {
    this.getIssuerNowSrvice('GAZP').subscribe(
      (response: Issuer) => {
        console.log(response.fullName)

        this.issuer = response
      }
    );
  }

  public getIssuerNowSrvice (secId: string): Observable<Issuer> {

    return this.client.get<Issuer>(`${this.apiServerURL}now?secId=${secId}`)
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