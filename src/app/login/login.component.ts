import { Component } from "@angular/core";
import { UserService } from "../services/UserService";
import { User } from "./registration.component";

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
                console.log('login')

                if (response.email==''){
                    window.location.href='login'
                } else {
                    this.userService.setUserData(response.name, response.email)
                    window.location.href=''
                }

                
            }
        )
    }
}