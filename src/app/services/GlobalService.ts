import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    loggedStatus = false;

    public setLoggedStatus(status: boolean) {
        this.loggedStatus = status

        console.log(`${this.loggedStatus}-service`)
    }
}