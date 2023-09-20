import { AfterViewInit, Component, OnInit} from '@angular/core';
import { IssuerService } from '../services/IssuerService';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { timer } from 'rxjs';
import { UserService } from '../services/UserService';


@Component({
  selector: 'issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css'], 
})
export class IssuerComponent implements OnInit{
  public issuer: Observable<Issuer>
  public issuerShortName: string | null

  constructor (private service: IssuerService, 
               private userService: UserService, 
               private activatedRoute: ActivatedRoute){} 
  

  ngOnInit() {
    this.issuerShortName = this.activatedRoute.snapshot.paramMap.get("secId")
    localStorage.setItem('currentIssuerShortName', this.issuerShortName!)
    
    this.issuer = timer(0, 15000).pipe(
      switchMap(() => this.service.getIssuerNow(this.issuerShortName!))
    )
  }

  public bookmarkIssuer(): void {
    if(this.userService.getUserName()==null) {
      window.location.href='login'
    } else {
      this.userService.addIssuerToUser(this.userService.getUserName(), this.issuerShortName!)
    }
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
  secId: string;
  fullName: string;

  constructor();
  constructor(secId: string, fullName: string);
  constructor(secId?: string, fullName?: string) {
    this.secId = secId!;
    this.fullName = fullName!;
  }
}