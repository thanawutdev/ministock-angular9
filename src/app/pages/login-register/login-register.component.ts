import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  message:string ="Hello world";

  //object
  profile = {
    "name":"KoSlam",
    "tel":"191",
    "gender":"Male"
  }

  //two way data binding
  userData  ={
    "email" : "",
    "password" : ""
  };

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  submitLogin(){
    // alert("hello angular");
    if(this.userData.email == "admin@mail.com" && this.userData.password == "1234"){
      this.router.navigate(["backend"])
    }else{
      alert("Login Fail");
    }
  }

}
