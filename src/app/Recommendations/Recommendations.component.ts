import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './Recommendations.component.html',
  styleUrls: ['./Recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor(private _service:NewsApiService) { }

  searchDisplay:any=[];

  ngOnInit(): void {

    this._service.Recommendations().subscribe((result)=>{
      this.searchDisplay=result.articles;
    })
  }

}
