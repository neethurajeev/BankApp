import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="THANK YOU FOR CHOOSING HDFC"
accnum="Account Number Please!!!"
pswd="Password"
acno=""
pwd=""
// database
database:any={
  1000:{acno:1000,uname:"neethu",password:1000,balance:5000},
  1001:{acno:1001,uname:"anoop",password:1001,balance:4000},
  1002:{acno:1002,uname:"abhi",password:1002,balance:3000}
}
  constructor(private router:Router) { }

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
    // alert("Login Clicked!!!!")
    var acno=this.acno
    var pwd=this.pwd
    let database=this.database
    if(acno in database){
      if(pwd==database[acno]["password"])
      {
        alert("Login success")
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("Invalid password")
      }

    }
    else{
      alert("Invalid user")
    }
  }


// login(a:any,p:any){
//       console.log(a.value);
      
//       var acno=a.value
//       var pwd=p.value
//       let database=this.database
//       if(acno in database){
//         if(pwd==database[acno]["password"])
//         {
//           alert("Login success")
//         }
//         else{
//           alert("Invalid password")
//         }
  
//       }
//       else{
//         alert("Invalid user")
//       }
// }
//}
} 
