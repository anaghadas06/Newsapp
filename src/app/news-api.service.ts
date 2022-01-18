import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public search=new BehaviorSubject<string>("");
  Recommendations():Observable<any> {
    return this.http.get(this.RecommendationsApiUrl);
  }
  api_key = '6a49fbcfaec548cd8965ab3b99c02cef';

  constructor(private http: HttpClient) { }
  RecommendationsApiUrl="https://newsapi.org/v2/everything?q=tech&sortBy=popularity&apiKey=6a49fbcfaec548cd8965ab3b99c02cef"
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }
  getArticleByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }

}
