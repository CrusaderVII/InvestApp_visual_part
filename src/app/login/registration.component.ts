import { AfterViewInit, Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/UserService';
import { GlobalService } from '../services/GlobalService';


@Component({
    selector: 'register',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

    constructor(private userService: UserService){}

    addUser(user: User): void {
        this.userService.addUser(user)
    }
}

export class User {

    constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}
} 