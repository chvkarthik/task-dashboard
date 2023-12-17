import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService{
    apiUrl = 'https://1.api.fy23ey06.careers.ifelsecloud.com';
    constructor(private http: HttpClient){}

    private apiDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
    apiDataSubject$ = this.apiDataSubject.asObservable();

    getResponseData(){
        console.log(this.http)
        return this.http.get(`${this.apiUrl}`);   
    }

    set apiData(data:any){
        this.apiDataSubject.next(data);
    }

    get apiData(){
        return this.apiDataSubject.value;
    }
}
