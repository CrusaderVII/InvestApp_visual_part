import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IssuerService } from "../../services/IssuerService";
import { CommonModule } from "@angular/common";
import { IssuerDetailsComponent } from "./issuer.details.component";

@NgModule ({
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule
    ],

    declarations: [
        IssuerDetailsComponent
    ],

    exports: [
        IssuerDetailsComponent
    ],

    providers: [
        IssuerService
    ]

})
export class IssuerDetaislModule{}