import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno:any

  //database
  database: any = {

    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "Laisha", password: 1001, balance: 3000, transaction: [] },
    1002: { acno: 1002, uname: "Vyom", password: 1002, balance: 4000, transaction: [] }
  }

  constructor(private http:HttpClient) {
    this.getDetails() }
//To save data in local storage
saveDetails(){
  localStorage.setItem("database",JSON.stringify(this.database))
  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}

//to get data from local storage
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


  // register
  register(uname: any, acno: any, password: any) {
    const data={
      uname,
      acno,
      password
    }
return this.http.post('http://localhost:3000/register',data)
  }
//login
  login(acno: any, pwd: any) {


    const data={
      acno,
      pwd
    }
     return this.http.post('http://localhost:3000/login',data)

  }
  // deposit
  deposit(acno: any, pwd: any, amount: any) {
  const data={
    amount,
    acno,
    pwd
  }
  // depost api call
  return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
  }

  // add token to req header
  getOptions(){

    // to fetch token
    const token=JSON.parse(localStorage.getItem("token")|| '')

    // create http header
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append("x-access-token",token)
      options.headers=headers
    }
    return options
  }
  // withdraw
  withdraw(acno: any, pwd: any, amount: any) {
    const data={
      amount,
      acno,
      pwd
    }
    // depost api call
    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
  }
    


  //transaction 
  transaction(acno:any){
    const data={
      acno
    }
    // depost api call
    return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
  }
    
onDelete(acno:any){
     // ondelete api call
  return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getOptions())

}
  }





