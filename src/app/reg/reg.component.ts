import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  signUpForm: any = FormGroup;


  constructor(private dataService: DataService,private fb:FormBuilder,private router:Router) { }
  

  ngOnInit():void{
  //void {
  this.CreateRegisterForm()
  {
 // this.signUpForm=this.fb.group
 ({
    FirstName:['',Validators.required],
      LastName:['', Validators.required],
      Email:['', Validators.required],
      Password:['', Validators.required]}
  )}
}


  onSubmit(){
    if(this.signUpForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
  }
  register(){
    this.dataService.sendPostRequest(this.signUpForm.value).subscribe((data: any[])=>{
      console.log(data);
      this.router.navigateByUrl("login");
    })
    console.log(this.signUpForm.value)
  }
  CreateRegisterForm(){
    this.signUpForm=this.fb.group({
      FirstName:[''],
      LastName:[''],
      Email:[''],
      Password:['']
    })
  }

}
