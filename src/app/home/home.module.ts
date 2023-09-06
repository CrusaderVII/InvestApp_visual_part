import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        FormsModule
    ],

    declarations: [
        HomeComponent
    ],

    exports: [
        HomeComponent
    ]
})
export class HomeModule{}