import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = "https://localhost:44321/";

  constructor(private httpClient: HttpClient) { }
  public sendPostRequest(User){
    const option ={
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        responseType:'text'as 'json' ,
      }
    return this.httpClient.post(this.REST_API_SERVER+"api/User/login",User,option);
  }
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem("token")
  }
  getUserId(): any {
    const token = sessionStorage.getItem("token");
    console.log(token);
    const decodedToken: any = jwt_decode(token)
    return Number(decodedToken.unique_name)
  }


  }




