import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    mArticles: Array<any>;
    mSources: Array<any>;
    searchKey:string="";

    constructor(private newsapi: NewsApiService,private dataservice:DataService,private favouriteservice:LoginService) {
      console.log('app component constructor called');
    }

    ngOnInit() {
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
      this.newsapi.search.subscribe((val:any)=>{
        this.searchKey=val;
      })
    }

    searchArticles(source) {
      console.log('selected source is: ' + source);
      this.newsapi.getArticleByID(source).subscribe(data => this.mArticles = data['articles']);
    }
    addFav(article) {

      const json = {
        userId: this.favouriteservice.getUserId(),
        title: article.title,
        urlToImage:article.urlToImage,
        description: article.description,

      }
      this.dataservice.AddFav(json, "api/favorites").subscribe(res=>{

          console.log(res);


        }

      )
    }
  }
