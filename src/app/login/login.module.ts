import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { UserService } from "../services/UserService";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule, 
        HttpClientModule
    ],

    declarations: [
        LoginComponent
    ],

    exports: [
        LoginComponent
    ],

    providers: [
        UserService
    ]
})
export class LoginModule{}