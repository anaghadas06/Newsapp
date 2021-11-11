import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  constructor(private formbuilder : FormBuilder, private route : Router) { }

  ngOnInit(): void {
  }

      firstname : FormControl = new FormControl("");
      lastname : FormControl = new FormControl("");
      email : FormControl = new FormControl("");
      password : FormControl = new FormControl("");

      UserData : FormGroup = this.formbuilder.group({
      firstname : new FormControl(""),
      lastname : new FormControl(""),
      email : new FormControl("", Validators.email),
     password : new FormControl("", Validators.required)
    })

    SignUp()
    {
      if(this.UserData.valid)
      {
        this.route.navigateByUrl("/dashboard");
      }
      else
      {
        alert("Field required");
      }
    }
  }





