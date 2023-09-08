import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IssuerModule } from './issuer/issuer.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrationModule } from './login/registration.module';
import { GlobalService } from './services/GlobalService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [IssuerModule, CommonModule, RouterModule, FormsModule, RegistrationModule],
  providers: [GlobalService]
})
export class AppComponent implements OnInit{
  title = 'InvestApp';

  constructor(private globalService: GlobalService){}

  loggedStatus = this.globalService.loggedStatus

  ngOnInit(): void {
    console.log(this.loggedStatus)
  }
}

