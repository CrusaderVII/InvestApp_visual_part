import { Component } from '@angular/core';
import { IssuerComponent } from './issuer/issuer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IssuerComponent,
  ],
  template: `
  <main>
    <header class="brand-name">
      <div class="container">
        <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#ddc469" stroke="#ddc469" height="50px" width="50px">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
          </g>
          <g id="SVGRepo_iconCarrier"><defs>
            <style>.cls-1{fill:none;stroke:#ddc469;stroke-miterlimit:10;stroke-width:1.91px;}
            </style>
          </defs>
          <circle class="cls-1" cx="12" cy="4.34" r="2.86"></circle><circle class="cls-1" cx="19.64" cy="16.75" r="2.86"></circle><circle class="cls-1" cx="4.36" cy="16.75" r="2.86"></circle><path class="cls-1" d="M6,19.09a8.59,8.59,0,0,0,12,0"></path><path class="cls-1" d="M14.82,4.82a8.57,8.57,0,0,1,5.77,8.11,6.71,6.71,0,0,1-.08,1.1"></path><path class="cls-1" d="M3.49,14a6.71,6.71,0,0,1-.08-1.1A8.57,8.57,0,0,1,9.18,4.82">
        </path></g></svg>
        <h1 class="company-name">InvestApp</h1>
      </div>
      
      <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">Market</a>
        <a href="#">About</a>
        <button calss="login-btn">Login</button>
      </nav>
    </header>
    <section class="content">
      <app-issuer></app-issuer>
    </section>
</main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello world';
}

