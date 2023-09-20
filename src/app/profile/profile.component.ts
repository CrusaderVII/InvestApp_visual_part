import { AfterViewInit, Component, OnInit} from '@angular/core';
import { User } from '../login/registration.component';
import { UserService } from '../services/UserService';
import { Observable, switchMap, timer, Subscription } from "rxjs";
import { Issuer } from '../issuer/issuer.component';
import { IssuerService } from '../services/IssuerService';


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
}) export class ProfileComponent implements OnInit{
    userName: string
    userEmail: string

    favoriteIssuers: Array<Issuer>

    subscription: Subscription

    constructor(private userService: UserService, private issuerService: IssuerService){}

    ngOnInit(): void {
        this.userName = this.userService.getUserName()
        this.userEmail = this.userService.getUserEmail()

        this.subscription = timer(0, 15000).pipe(
            switchMap(() => this.issuerService.getUserIssuersNow(this.userService.getUserFavoriteIssuersFromStorage()))
        ).subscribe(
            (data: Issuer[]) => { this.favoriteIssuers = data}
        )
    }

    public logout() {
        this.userService.logoutUser()
        window.location.href = ''
    } 
}