import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { PassThrough } from 'stream';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registerform model
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
   
    // alert("Register clicked")
    var acno=this.registerForm.value.acno
    var pwd=this.registerForm.value.pwd
    var uname=this.registerForm.value.uname
    if(this.registerForm.valid){
      const result=this.db.register(uname,acno,pwd)
    if(result){
      alert("sucessfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("account already exist")
    }
    }
    else{
      alert("Invalid form")
    }
    }

}
