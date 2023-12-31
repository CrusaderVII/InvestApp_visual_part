import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IssuerModule } from './issuer/issuer.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrationModule } from './login/registration.module';
import { UserService } from './services/UserService';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { MarketModule } from './market/market.module';
import { ProfileModule } from './profile/profile.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [IssuerModule, CommonModule, RouterModule, MarketModule,
            FormsModule, RegistrationModule, LoginModule, ProfileModule],
  providers: []
})
export class AppComponent implements OnInit{
  title = 'InvestApp';

  constructor(private userService: UserService){}

  userName: string

  ngOnInit(): void {
    this.userName = this.userService.getUserName()
  }
}

