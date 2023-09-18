import { Injectable, OnInit } from "@angular/core";
import { User } from "../login/registration.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable ({
    providedIn: 'root'
})
export class UserService implements OnInit{
    private apiServerURL = 'http://localhost:8070/investapp.com/user'

    private readonly user: User;

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
}