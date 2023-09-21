import { Injectable, OnInit } from "@angular/core";
import { User } from "../login/registration.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IssuerMetadata } from "../issuer/issuer.component";

@Injectable ({
    providedIn: 'root'
})
export class UserService implements OnInit{
    private apiServerURL = 'http://localhost:8070/investapp.com/user'

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        
    }

    public addUser(user: User) {

        this.http.post<User>(`${this.apiServerURL}/save`, user).subscribe((response) => {
            console.log(response)
            return response
        })

        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
    }

    public getUser(email: string, password: string): Observable<User> {
        return this.http.get<User>(`${this.apiServerURL}/?email=${email}&password=${password}`)
    }

    public getUserName(): string {
        return localStorage.getItem('name')!
    }

    public getUserEmail(): string {
        return localStorage.getItem('email')!
    }

    public setUserData(name: string, email: string) {
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
    }

    public logoutUser() {
        localStorage.removeItem('name')
        localStorage.removeItem('email')
    }

    public addIssuerToUser(userName: string, secId: string, fullName: string) {
        
        this.http.get(`${this.apiServerURL}/issuers/mark?userName=${userName}&secId=${secId}`)
            .subscribe()

        localStorage.setItem('issuersList', localStorage.getItem('issuersList')+secId+'--'+fullName+'   ')
        console.log(this.getUserFavoriteIssuersFromStorage())
    }

    public getUserFavoriteIssuers(userName: string): Observable<Array<IssuerMetadata>>{
        return this.http.get<Array<IssuerMetadata>>(`${this.apiServerURL}/issuers?userName=${userName}`)
    }

    public getUserFavoriteIssuersFromStorage(): Array<IssuerMetadata> {
        const issuers = localStorage.getItem('issuersList')!.split('   ').filter((issuer) => issuer !== '')
        const result: Array<IssuerMetadata> = []

        issuers?.forEach(issuer => {
            result.push(new IssuerMetadata(issuer.split('--').at(0)!, issuer.split('--').at(1)!))
        })

        return result
    }

    public setFavoriteIssuersToStorage(issuers: Array<IssuerMetadata>) {
        localStorage.setItem('issuersList', '')

        issuers.forEach(issuer => {
            localStorage.setItem('issuersList', localStorage.getItem('issuersList')+issuer.secId+'--'+issuer.fullName+'   ')
        })
    }

    public addUserFavoriteIssuer(issuer: IssuerMetadata) {
        localStorage.setItem('issuersList', localStorage.getItem('issuersList')+issuer.secId+'--'+issuer.fullName+'   ')
        console.log(this.getUserFavoriteIssuersFromStorage)
    }

    public saveUsersFavoriteIssuers(userName: string) {
        localStorage.setItem('issuersList', '')

        this.getUserFavoriteIssuers(userName).subscribe(issuers => {
            issuers.forEach(issuer => {
                localStorage.setItem('issuersList', localStorage.getItem('issuersList')+issuer.secId+'--'+issuer.fullName+'   ')
            })
        })

    }

    public deleteUserFavoriteIssuer(userName: string, secId: string) {
        const array = this.getUserFavoriteIssuersFromStorage().filter(value => value.secId!=secId)
        this.setFavoriteIssuersToStorage(array)

        this.http.delete(`${this.apiServerURL}/issuers/delete?userName=${userName}&secId=${secId}`)
            .subscribe()
    }

    public conntainsIssuerInBookmarks(secId: string): boolean {
        const secIds = this.getUserFavoriteIssuersFromStorage()
                .map((issuerMetadata: IssuerMetadata) => issuerMetadata.secId)

        return secIds.includes(secId)
    }
}