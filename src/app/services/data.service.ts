import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  currentUser:any
  currentAcno:any

  // database
 database:any={
  1000:{acno:1000,uname:"neethu",password:1000,balance:5000,transaction:[]},
  1001:{acno:1001,uname:"anoop",password:1001,balance:4000,transaction:[]},
  1002:{acno:1002,uname:"abhi",password:1002,balance:3000,transaction:[]}
 }

  constructor() { 
    this.getDetails()
  }

//  to save data in local storage
    saveDetails(){
      localStorage.setItem("database",JSON.stringify(this.database))
      if(this.currentAcno){
        localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
      }
      if(this.currentUser){
        localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
      }
    }

// to get data from local storage
  getDetails(){
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
  }

  // register-
  register(uname:any,acno:any,password:any)
  {
    // var acno=parseInt(acno)
    let database=this.database
    if(acno in database){
      // already exist acno
      return false
    }
    else{
      // add details in to db
      database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
      }
      console.log(database);
      this.saveDetails()
      return true
    }
  }

  login(acno:any,pwd:any){
    // alert("Login Clicked!!!!")
    
    let database=this.database
    if(acno in database){
      if(pwd==database[acno]["password"])
      {
        this.currentUser=database[acno]["uname"]
        this.currentAcno=acno
        this.saveDetails()
       return true
      }
      else{
        alert("Invalid password")
        return false
      }

    }
    else{
      alert("Invalid user")
      return false
    }
  }

  // deposit
  deposit(acno:any,pwd:any,amt:any){
  var amount=parseInt(amt)
  let database=this.database
  if(acno in database){
    if(pwd==database[acno]["password"]){
      database[acno]["balance"]+=amount

      database[acno]["transaction"].push({
        type:"Credit",
        amount:amount
      })

      this.saveDetails()

      return database[acno]["balance"]
    }
    else{
      alert("Incorrect Password")
      return false
    }
  }
  else{
    alert("User doesnot exist")
    return false
  }
}
 // withdraw
 withdraw(acno:any,pwd:any,amt:any){
  var amount=parseInt(amt)
  let database=this.database

  if(acno in database){

    if(pwd==database[acno]["password"]){

      if( database[acno]["balance"]>amount){
        database[acno]["balance"]-=amount

        database[acno]["transaction"].push({
          type:"Debit",
          amount:amount
        })

        this.saveDetails()

        return database[acno]["balance"]
      }
      else{
        alert("Insufficient balance")
        return false
      }
    }
    else{
      alert("Incorrect Password")
      return false
    }
  }
  else{
    alert("User doesnot exist")
    return false
  }
}

// transaction
transaction(acno:any){
  return this.database[acno].transaction

}
}

