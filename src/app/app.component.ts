import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IssuerModule } from './issuer/issuer.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [IssuerModule, CommonModule, RouterModule],
})
export class AppComponent{
  title = 'InvestApp';
}

