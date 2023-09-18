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
    this.getIssuerForLastMonth()
  }

  ngOnInit(): void {
    this.issuerShortName = localStorage.getItem('currentIssuerShortName')!
    console.log(this.issuerShortName)
    this.getIssuerForLastMonth()
  }

  public getIssuerForLastMonth(): void{
    this.service.getIssuerForLastMonth(this.issuerShortName).subscribe(
      (response: Array<Issuer>) => {
        this.marketData = response

        this.drawChart(response)
      })
  }

  private drawChart(data: Array<Issuer>):void {
    data.reverse()

    const canvas: HTMLCanvasElement = this.canvas.nativeElement;

    Chart.register(...registerables)

    Chart.defaults.borderColor = '#CCCCCC';
    Chart.defaults.color = '#D699DE';

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: data.map((issuer: Issuer) => issuer.date),
        datasets: [{
          data: data.map((issuer: Issuer) => issuer.priceOpen),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            min: this.getMin(data.at(0)!.priceOpen)
          }
        }
      }
    });
  }

  getMin(priceOpen: number): number {
    const getNumDigits = (num: number): number => Math.floor(Math.log10(num));

    return priceOpen - Math.pow(10, getNumDigits(priceOpen)-1);
  }
}

