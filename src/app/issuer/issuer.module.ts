import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { IssuerComponent } from "./issuer.component";
import { FormsModule } from "@angular/forms";
import { IssuerService } from "../services/IssuerService";
import { CommonModule } from "@angular/common";
import { IssuerDetaislModule } from "./issuer.details/issuer.details.module";
import { RouterModule } from '@angular/router'
import { UserService } from "../services/UserService";

@NgModule ({
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        IssuerDetaislModule,
        RouterModule
    ],

    declarations: [
        IssuerComponent
    ],

    exports: [
        IssuerComponent
    ],

    providers: [
        IssuerService,
        UserService
    ]

})
export class IssuerModule{}