import { Component } from "@angular/core";
import { UserService } from "../services/UserService";
import { User } from "./registration.component";
import { IssuerMetadata } from "../issuer/issuer.component";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    constructor(private userService: UserService){}

    loginUser(email: string, password: string) {
        this.userService.getUser(email, password).subscribe(
            response => {
                if (response.email==''){
                    window.location.href='login'
                    return;
                } else {
                    this.userService.setUserData(response.name, response.email)
                    this.userService.saveUsersFavoriteIssuers(response.name)
                    window.location.href=''
                }
            }
        )
    }
}