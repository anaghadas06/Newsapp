import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatSidenavModule, MatListModule,MatFormFieldModule,MatLabel
} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  public searchTerm:string='';
  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');

  }

  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi.getArticleByID(source).subscribe(data => this.mArticles = data['articles']);
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.newsapi.search.next(this.searchTerm);
}
}
