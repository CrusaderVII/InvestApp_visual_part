import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issuer',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="issuer-header">
    <div class="right-box">
      <div class="company-name">
        <h1 class="ticker">{{secId}}</h1>
        <h1 class="name">{{shortName}}</h1>
      </div>
      <div class="price">
        <h1 class="amount">{{price}}</h1>
        <h1 class="percent">{{percent}}%</h1>
      </div>
    </div>
  </header>
`,
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent {
  shortName = 'Газпром ао'
  secId = 'GAZP'
  price = 175.6
  percent = 0.32
}
