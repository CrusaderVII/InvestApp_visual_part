import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MarketComponent } from "./market.component";
import { IssuerService } from "../services/IssuerService";
import { FormsModule } from "@angular/forms";
import { IssuerListModule } from "./issuer-list/issuer-list.module";

@NgModule ({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        IssuerListModule
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