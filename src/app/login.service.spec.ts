import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports:[HttpClientTestingModule,
      FormsModule,
      ReactiveFormsModule],
      providers:[LoginService]

  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
