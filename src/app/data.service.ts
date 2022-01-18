import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://localhost:44321/";

  constructor(private httpClient: HttpClient) { }
  public sendPostRequest(User){
    return this.httpClient.post(this.REST_API_SERVER+"api/User",User);
  }
  public AddFav(reqBody, url) {
    return this.httpClient.post(this.REST_API_SERVER + url ,reqBody);
  }
  getFav(url) {
    return this.httpClient.get(this.REST_API_SERVER + url)
  }
}
