import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="THANK YOU FOR CHOOSING HDFC"
accnum="Account Number Please!!!"
acno=""
pwd=""
database={
  1000:{accno:1000,unmae:"neethu",password:1000,balance:5000},
  1001:{accno:1001,uname:"anoop",password:1001,balance:4000},
  1002:{accno:1002,uname:"abhi",password:1002,balance:3000}
}
  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
    
  }
  pwdChange(event:any){
    this.pwd=event.target.value
    
  }
  login(){
    alert("Login Clicked!!!!")
  }

}
