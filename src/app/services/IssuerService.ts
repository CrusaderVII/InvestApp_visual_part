import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Issuer } from "../issuer/issuer.component";

@Injectable ({
    providedIn: 'root'
})
export class IssuerService {
    private apiServerURL = 'http://localhost:8070/investapp.com/issuer/'

    constructor(private http: HttpClient) { }

    public getIssuerNow (secId: string): Observable<Issuer> {
        return this.http.get<Issuer>(`${this.apiServerURL}now?secId=${secId}`)
    }

    public getMainIssuersNow(): Observable<Array<Issuer>> {
        return this.http.get<Array<Issuer>>(`${this.apiServerURL}main/now`)
    }

    public getIssuerForLastMonth (secId: string): Observable<Array<Issuer>> {
        return this.http.get<Array<Issuer>>(`${this.apiServerURL}last-month?secId=${secId}`)
    }
}