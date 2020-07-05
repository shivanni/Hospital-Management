import { Component, OnInit } from '@angular/core';
import {  User } from './PatientLogin.Model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-login',
  templateUrl: './PatientLogin.component.html',
 
  //styleUrls: ['./PatientLogin.component.css']
})
export class PatientLoginComponent{
  //userObj:User=new User()
  
  constructor(public Http:HttpClient, public  userObj:User, 
              public routing: Router
    ) { }
  
  Login(){
    let loginDetail={
      userName:this.userObj.userName,
      password:this.userObj.password
    }
      this.Http.post("https://localhost:44372/api/SecurityAPI", loginDetail)
          .subscribe(
              res=>this.Success(res),
              res=>this.Error(res)
                    );
  }
  Success(res){
    //alert(res.token)
    this.userObj.token = res.token;
    this.routing.navigate(["Home"])
  }
  Error(res){}
 

}
