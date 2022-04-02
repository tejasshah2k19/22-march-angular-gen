import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }


  signupApi(user:any):Observable<any>{
    //node url api 
    console.log("calling singup api ");
    return this.httpClient.post(environment.host+"savecustomer",user)
  }

  getAllUsers():Observable<any>{
    return this.httpClient.get(environment.host+"users")
  }

  loginApi(user:any):Observable<any>{
    return this.httpClient.post(environment.host+"login",user)
  }

}
