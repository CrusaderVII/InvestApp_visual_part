import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IssuerService } from "src/app/services/IssuerService";
import { IssuerListComponent } from "./issuer-list.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],

    declarations: [
        IssuerListComponent
    ],

    exports: [
        IssuerListComponent
    ],

    providers: [
        IssuerService
    ]
})
export class IssuerListModule{}