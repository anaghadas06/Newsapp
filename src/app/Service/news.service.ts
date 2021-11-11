import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsModule } from '../Module/news/news.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpclient:HttpClient ) { 

  }

  GetNews() : Observable<Array<NewsModule>>
  {
    return this.httpclient.get<Array<NewsModule>>("http://localhost:3000/data")
  }
}
