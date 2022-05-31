import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() {    }

    public dataList = [
        { id: 1, name: "laptop"},
        { id: 2, name: "desktop"},
        { id: 3, name: "ipad"}
    ]

    getInfo(): void {
        console.log("this message getInfo")
    }

    pushNewData() {
        
    }
}

// if we want to use this service, we need to register it as the component's
// // dependency, with import in the component's .ts file.
