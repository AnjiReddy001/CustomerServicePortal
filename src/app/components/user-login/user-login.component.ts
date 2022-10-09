import { Component, OnInit } from '@angular/core';
import { LoginuserService } from 'src/app/loginuser.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User =new User();

  constructor(public loginUserService: LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
    this.loginUserService.loginUser(this.user).subscribe(data=>{
      alert("Login successfully")
    },
    error=>alert("UserId and Password are unauthorized please fill registation page"));
  }

}
