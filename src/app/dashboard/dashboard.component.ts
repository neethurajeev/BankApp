import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   acno=""
   pwd=""
   amount=""

   acno1=""
   pwd1=""
   amount1=""
    
   user:any

   loginDate:any


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUser
    this.loginDate=new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please log In")
      this.router.navigateByUrl("")
    }
  }
  


  depositForm=this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })


  withdrawForm=this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })



deposit(){
  var acno=this.depositForm.value.acno
  var pwd=this.depositForm.value.pwd
  var amount=this.depositForm.value.amount
  if(this.depositForm.valid){
 const result= this.ds.deposit(acno,pwd,amount)
 if(result){
   alert(amount+"successfully deposited,And new balance is :"+result)
 }
}
else{
  alert("Invalid Form")
}
}

withdraw(){
  var acno=this.withdrawForm.value.acno
  var pwd=this.withdrawForm.value.pwd
  var amount=this.withdrawForm.value.amount
  if(this.withdrawForm.valid){
 const result= this.ds.withdraw(acno,pwd,amount)
 if(result){
   alert(amount+"successfully debited,And new balance is :"+result)
 }
}
else{
  alert("Invalid Form")
}
}

// delete from parent
deletefromParent(){
   this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
}

// log out

logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")
  this.router.navigateByUrl("")
 }

//  oncancel--child
onCancel(){
  this.acno=""
}

// ondelete--child
onDelete(event:any){
  alert("Delete Account " +event)
}

}