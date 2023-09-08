import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IssuerService } from "../services/IssuerService";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration.component";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from "../services/UserService";
import { GlobalService } from "../services/GlobalService";

@NgModule ({
    imports: [
        HttpClientModule,
        FormsModule,
        RouterModule,
        CommonModule
    ],

    declarations: [
        RegistrationComponent
    ],

    exports: [
        RegistrationComponent
    ],

    providers: [
        UserService,
        GlobalService
    ]

})
export class RegistrationModule{}