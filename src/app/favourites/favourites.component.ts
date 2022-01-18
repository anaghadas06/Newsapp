import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/services/fav.service';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-Fav',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouriteComponent implements OnInit {

  public articles : any = [];
  
  constructor(private favService : DataService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.favService.getFav(`api/Favorites/${this.loginService.getUserId()}`).subscribe((res: any[]) => {
      this.articles = res
      
    })
  }
  

}
