import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Issuer } from "../issuer/issuer.component";

@Component({
    selector: 'market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit{
    mainIssuers: Observable<Array<Issuer>>
    simpleIssuers: Observable<Array<Issuer>>

    ngOnInit(): void {
        
    }
}