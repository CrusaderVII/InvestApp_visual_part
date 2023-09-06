import { AfterViewInit, Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'register',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
    addUser(user: any) {
        console.log(user)
    }
}

export class User {

    constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}
} 