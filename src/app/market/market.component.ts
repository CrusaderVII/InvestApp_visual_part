import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, switchMap, timer, Subscription } from "rxjs";
import { Issuer } from "../issuer/issuer.component";
import { IssuerService } from "../services/IssuerService";
import { CommonModule } from "@angular/common";

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

        this.subscription = timer(0, 15000).pipe(
            switchMap(() => this.service.getStock())
        ).subscribe(
            (data: Issuer[]) => { this.simpleIssuers = data.slice(0, 9)}
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}