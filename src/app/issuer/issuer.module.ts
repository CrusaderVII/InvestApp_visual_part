import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { IssuerComponent } from "./issuer.component";
import { FormsModule } from "@angular/forms";
import { IssuerService } from "../services/IssuerService";

@NgModule ({
    imports: [
        HttpClientModule,
        FormsModule
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