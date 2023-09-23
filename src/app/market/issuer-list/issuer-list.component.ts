import { Component, OnInit, OnDestroy } from "@angular/core";
import { IssuerService } from "src/app/services/IssuerService";
import { Issuer } from "src/app/issuer/issuer.component";
import { Observable, switchMap, timer, Subscription } from "rxjs";


@Component({
    selector: 'issuer-list',
    templateUrl: './issuer-list.component.html',
    styleUrls: ['./issuer-list.component.css']
})
export class IssuerListComponent implements OnInit{
    issuers: Array<Issuer>
    pages: number

    subscription: Subscription

    constructor(private service: IssuerService){}

    ngOnInit(): void {
        this.subscription = timer(0, 15000).pipe(
            switchMap(() => this.service.getStock(1))
        ).subscribe(
            (data: Issuer []) => {
                this.issuers = data
            }
        )

        this.service.getStockPages().subscribe(
            (response) => {
                console.log(response)
                this.service.savePages(response.page)
            }
        )
    }

    public goLink(shortName: string, fullName:string) {
        window.location.href=`market/issuer/${shortName}/${fullName}`
    }

    public getPages(): number {
        return this.service.getPagesFromMemory()
    }

    public goPage(page: number) {
        console.log(page)

        this.subscription.unsubscribe()

        this.subscription = timer(0, 15000).pipe(
            switchMap(() => this.service.getStock(page))
        ).subscribe(
            (data: Issuer []) => {
                this.issuers = data
            }
        )
    }
}

export class PageMetadata {
    page: number
}