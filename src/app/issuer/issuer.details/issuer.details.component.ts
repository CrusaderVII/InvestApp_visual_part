import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  marketData: Array<Issuer> = []

  @ViewChild('chart', {static: true}) 
  canvas: ElementRef
  context!: CanvasRenderingContext2D;

  constructor (private service: IssuerService) {
    this.getIssuerForLastMonth()
  }

  ngOnInit(): void {
    this.getIssuerForLastMonth()
    this.drawChart()
  }

  ngAfterViewInit(): void {

  }

  public getIssuerForLastMonth(): void{
    this.service.getIssuerForLastMonth('GAZP').subscribe(
      (response: Array<Issuer>) => {
        this.marketData = response
      })
  }

  private drawChart():void {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const context = canvas.getContext("2d")

    Chart.register(...registerables)

    Chart.defaults.borderColor = '#CCCCCC';
    Chart.defaults.color = '#D699DE';

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jsune', 'July', 'Augst', 'September', 'November', 'December'],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

