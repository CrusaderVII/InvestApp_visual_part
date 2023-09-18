import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { RouterModule } from "@angular/router";
import { UserService } from "../services/UserService";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],

    declarations: [
        ProfileComponent
    ],

    exports: [
        ProfileComponent
    ],

    providers: [
        UserService
    ]

}) 
export class ProfileModule{}