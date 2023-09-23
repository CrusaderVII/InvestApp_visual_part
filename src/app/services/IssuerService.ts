import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Issuer, IssuerMetadata } from "../issuer/issuer.component";
import { PageMetadata } from "../market/issuer-list/issuer-list.component";

@Injectable ({
    providedIn: 'root'
})
export class IssuerService {
    private apiServerIssuerURL = 'http://localhost:8070/investapp.com/issuer/'
    private apiServerURL = 'http://localhost:8070/investapp.com/'

    constructor(private http: HttpClient) { }

    public getIssuerNow (secId: string): Observable<Issuer> {
        return this.http.get<Issuer>(`${this.apiServerIssuerURL}now?secId=${secId}`)
    }

    public getMainIssuersNow(): Observable<Array<Issuer>> {
        return this.http.get<Array<Issuer>>(`${this.apiServerIssuerURL}main/now`)
    }

    public getIssuerForLastMonth (secId: string): Observable<Array<Issuer>> {
        return this.http.get<Array<Issuer>>(`${this.apiServerIssuerURL}last-month?secId=${secId}`)
    }

    public getStock (page: number): Observable<Array<Issuer>> {
        return this.http.get<Array<Issuer>>(`${this.apiServerURL}stock?page=${page}`)
    }

    public getUserIssuersNow(metadata: Array<IssuerMetadata>): Observable<Array<Issuer>> {
        return this.http.post<Array<Issuer>>(`${this.apiServerIssuerURL}certain`, metadata)
    }

    public getStockPages(): Observable<PageMetadata> {
        return this.http.get<PageMetadata>(`${this.apiServerURL}stock/pages`)
    }

    public savePages(pages: number) {
        localStorage.setItem('pages', pages.toString())
    }

    public getPagesFromMemory(): number{ 
        return parseInt(localStorage.getItem('pages')!) 
    }
}