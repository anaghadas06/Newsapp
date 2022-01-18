import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { FilterPipe } from '../shared/filter.pipe';
import { LoginComponent } from '../login/login.component';
import { FavouriteComponent } from '../favourites/favourites.component';
describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LoginComponent,
        FavouriteComponent,
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FilterPipe.forRoot()
     ],
     schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'news-api'`, () => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('news-api');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to news-api!');
  // });
});
