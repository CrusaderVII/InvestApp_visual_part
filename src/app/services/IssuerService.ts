import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Issuer } from "../issuer/issuer.component";

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

    public getStock (): Observable<Array<Issuer>> {
        return this.http.get<Array<Issuer>>(`${this.apiServerURL}stock`)
    }
}