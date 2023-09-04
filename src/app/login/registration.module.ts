import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IssuerService } from "../services/IssuerService";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration.component";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule ({
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        RouterModule,
        BrowserModule
    ],

    declarations: [
        RegistrationComponent
    ],

    exports: [
        RegistrationComponent
    ],

    providers: [
        IssuerService
    ]

})
export class RegistrationModule{}