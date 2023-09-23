import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, switchMap, timer, Subscription } from "rxjs";
import { Issuer } from "../issuer/issuer.component";
import { IssuerService } from "../services/IssuerService";

@Component({
    selector: 'market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit, OnDestroy{
    mainIssuers: Array<Issuer>
    simpleIssuers: Array<Issuer>

    subscription: Subscription

    constructor(private service: IssuerService){}

    ngOnInit(): void {
        this.subscription = timer(0, 15000).pipe(
            switchMap(() => this.service.getMainIssuersNow())
        ).subscribe(
            (data: Issuer[]) => { this.mainIssuers = data }
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    public goLink(shortName: string, fullName:string) {
        window.location.href=`market/issuer/${shortName}/${fullName}`
    }

}