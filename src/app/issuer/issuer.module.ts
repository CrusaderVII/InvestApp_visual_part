import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { IssuerComponent } from "./issuer.component";
import { FormsModule } from "@angular/forms";
import { IssuerService } from "../services/IssuerService";
import { CommonModule } from "@angular/common";

@NgModule ({
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule
    ],

    declarations: [
        IssuerComponent
    ],

    exports: [
        IssuerComponent
    ],

    providers: [
        IssuerService
    ]

})
export class IssuerModule{}