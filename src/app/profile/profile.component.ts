import { AfterViewInit, Component, OnInit} from '@angular/core';
import { User } from '../login/registration.component';
import { UserService } from '../services/UserService';


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
}) export class ProfileComponent implements OnInit{
    userName: string
    userEmail: string

    constructor(private userService: UserService){}

    ngOnInit(): void {
        this.userName = this.userService.getUserName()
        this.userEmail = this.userService.getUserEmail()
    }

    public logout() {
        this.userService.logoutUser()
        window.location.href = ''
    } 
}