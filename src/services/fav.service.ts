import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { FavouriteComponent } from 'src/app/favourites/favourites.component';
import { LoginComponent } from 'src/app/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  public favItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.favItemList.push(...product);
    this.productList.next(product);
  }
  addtoFav(product : any){
    this.favItemList.push(product);
    this.productList.next(this.favItemList);
    console.log(this.favItemList)
  }
  
  
  removeFavItem(product: any){
    this.favItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.favItemList.splice(index,1);
      }
    })
    this.productList.next(this.favItemList);
  }
  removeAllFav(){
    this.favItemList = []
    this.productList.next(this.favItemList);
  }
}
