import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MarketComponent } from "./market.component";
import { IssuerService } from "../services/IssuerService";

@NgModule ({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule
    ],

    declarations: [
        MarketComponent
    ],

    exports: [
        MarketComponent
    ],

    providers: [
        IssuerService
    ]
})
export class MarketModule{}