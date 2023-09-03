import { Component, Input, OnInit} from '@angular/core';
import { IssuerService } from '../../services/IssuerService';
import { Issuer } from '../issuer.component';

@Component({
    selector: 'issuer-details',
    templateUrl: './issuer.details.component.html',
    styleUrls: ['./issuer.details.component.css']
  })
export class IssuerDetailsComponent implements OnInit{
  @Input() issuer: Issuer
  public marketData: Array<Issuer> = []

  constructor (private service: IssuerService) {}

  ngOnInit(): void {
    this.getIssuerForLastMonth()
  }

  public getIssuerForLastMonth(): void{
    this.service.getIssuerForLastMonth(`YNDX`).subscribe(
      (response: Array<Issuer>) => {
        this.marketData = response
      })
  }
}