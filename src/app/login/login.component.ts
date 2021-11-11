import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private formbuilder : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    
  }
  
  email : FormControl = new FormControl("");
  password : FormControl = new FormControl("");

  userdata : FormGroup = this.formbuilder.group({
     email : new FormControl("", Validators.email),
     password : new FormControl("", Validators.required)
  })

  

  login()
  {
    if(this.userdata.valid){
      this.route.navigateByUrl("/dashboard");
    }
    else{
      alert("Fill the fields correctly");
    }
  }

}
