import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    
    headers:any;
    constructor(private http: HttpClient) {
        
     }
     
    loginUser() {

        let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        let url='https://gorest.co.in/public/v2/users';
       return this.http.get(url, { headers: header });
      }
}