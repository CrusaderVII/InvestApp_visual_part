import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IssuerModule } from './issuer/issuer.module';
import { HttpClientModule } from "@angular/common/http";
import { IssuerService } from './services/IssuerService';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, IssuerModule, HttpClientModule],
  providers: [IssuerService],
})
export class AppComponent {
  console = console;
  title = 'InvestApp';
}

