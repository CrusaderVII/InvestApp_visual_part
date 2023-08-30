import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issuer',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section>
    
    <div class="left-container">
      <h1>Hello world</h1>
    </div>

    <div class="right-container">

    </div>
    
  </section>
`,
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent {
  secId = 'GAZP'
  price = 175
}
