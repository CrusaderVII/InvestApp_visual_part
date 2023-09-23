import { Component, Input, OnInit, ViewChild, ElementRef, numberAttribute } from '@angular/core';
import { IssuerService } from '../../services/IssuerService';
import { Issuer } from '../issuer.component';
import { Chart, registerables } from 'chart.js';

@Component({
    selector: 'issuer-details',
    templateUrl: './issuer.details.component.html',
    styleUrls: ['./issuer.details.component.css']
  })
export class IssuerDetailsComponent implements OnInit{
  @Input() issuer: Issuer
  issuerShortName: string
  marketData: Array<Issuer> = []

  @ViewChild('chart', {static: true}) 
  canvas: ElementRef
  context!: CanvasRenderingContext2D;

  constructor (private service: IssuerService) {
  }

  ngOnInit(): void {
    this.issuerShortName = localStorage.getItem('currentIssuerShortName')!
    this.getIssuerForLastMonth()
  }

  public getIssuerForLastMonth(): void{
    this.service.getIssuerForLastMonth(this.issuerShortName).subscribe(
      (response: Array<Issuer>) => {
        this.marketData = response

        this.drawChart(response)
      })
  }

  public getIssuerForLastWeek(): void {
    this.service.getIssuerForLastWeek(this.issuerShortName).subscribe(
      (response) => {
        this.marketData = response
        console.log('lolo')
        this.drawChart(response)
      }
    )
  }

  private drawChart(data: Array<Issuer>):void {
    data.reverse()

    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    
    Chart.register(...registerables)

    Chart.defaults.borderColor = '#CCCCCC';
    Chart.defaults.color = 'black';

    if (Chart.getChart(canvas)) {
      Chart.getChart(canvas)?.destroy();
    }

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: data.map((issuer: Issuer) => issuer.date),
        datasets: [{
          data: data.map((issuer: Issuer) => issuer.priceOpen),
          borderWidth: 1,
          fill: true,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            min: this.getMin(data.map((issuer: Issuer) => issuer.priceOpen).sort().at(1)!),
            max: this.getMax(data.map((issuer: Issuer) => issuer.priceOpen).sort().reverse().at(1)!),
          }
        },

        plugins: {
          title: {
            display: false
          },

          legend: {
            display: false
          }
        }
      }
    });
  }

  getMin(price: number): number {
    const getNumDigits = (num: number): number => Math.floor(Math.log10(num)-1);

    return price - Math.pow(10, getNumDigits(price));
  }

  getMax(price: number): number {
    const getNumDigits = (num: number): number => Math.floor(Math.log10(num)-1);
    
    return price + Math.pow(10, getNumDigits(price))
  }
}

