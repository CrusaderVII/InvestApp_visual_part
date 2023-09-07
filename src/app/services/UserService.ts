import { Injectable } from "@angular/core";
import { User } from "../login/registration.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable ({
    providedIn: 'root'
})
export class UserService {
    private apiServerURL = 'http://localhost:8070/investapp.com/user/save'

    constructor(private http: HttpClient) {}

    addUser(user: User) {
        this.http.post<User>(`${this.apiServerURL}`, user).subscribe((response) => {
            console.log(response)
            return response
        })
    }
}