import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IssuerModule } from "./issuer/issuer.module";
import { IssuerService } from "./services/IssuerService";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { IssuerDetaislModule } from "./issuer/issuer.details/issuer.details.module";
import { RouterModule } from '@angular/router'
import { IssuerComponent } from "./issuer/issuer.component";
import "@fontsource/krona-one";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        IssuerDetaislModule,
        RouterModule
    ],

    declarations: [
        
    ],

    exports: [
        
    ],

    bootstrap: [
        
    ]

})
export class AppModule{}