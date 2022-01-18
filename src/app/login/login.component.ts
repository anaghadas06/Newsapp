import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  signInForm: any= FormGroup;


  constructor(private loginService: LoginService,private service: FormBuilder,private routeservice: Router) { }

  ngOnInit(): void {

    this.createLoginform();
    {
      Email:['',Validators.compose([Validators.required,Validators.email]) ]
      Password:['',Validators.required]
    }


  }
  login(){
    this.loginService.sendPostRequest(this.signInForm.value).subscribe((data:any)=>{
      console.log(data);
      sessionStorage.setItem("token", data)
     this.navigatetohome();
    }, err => {
      alert('Invalid username/password')
    })
    console.log(this.signInForm.value)
  }

  createLoginform(){
    this.signInForm = this.service.group({
      Email:[''],
      Password:['']
    })
  }
  navigatetohome(){
    this.routeservice.navigate(["home"])


  }
}
