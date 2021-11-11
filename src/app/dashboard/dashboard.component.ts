import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Service/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articlelist : any = []
  constructor(private nservice : NewsService) { }

  ngOnInit(): void {

    this.nservice.GetNews().subscribe(
      res =>{
        this.articlelist = res;}
    )
  }

}
