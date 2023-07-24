import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Contactschema } from 'src/model/contact-schema';

@Injectable({
  providedIn: 'root'
})  
export class ApiService {

BASE_URL = 'http://localhost:3000' ;

// service constructor
  constructor(private http:HttpClient) {  }

  handleError(error:HttpErrorResponse) {


    let errorMsg:string=''
  
    if(error.error){
  
  //  client error
  errorMsg=`Error:${error.message}`
   
    }
    else{
  
    errorMsg=`status:${error.status}\n
    Error:${error.message}`
  }
  return throwError(()=>errorMsg)


  
  }


// API call
// create a function in api.service.ts

getALLContact(){




  // url  : http://localhost:3000/contacts
  // requist : get

  // this.http.get('http://localhost:3000/contacts')  \

  // or

  return this.http.get(`${this.BASE_URL}/contacts`)
}



// view component


viewContact(id:any){

  // api call url : / url: http://localhost:3000/contacts
  // requist : get

  return this.http.get(`${this.BASE_URL}/contacts/${id}`)
}


// api call for getting  perticular group
getGroup(id:any){
 return this.http.get(`${this.BASE_URL}/groups/${id}`)
}



getGroups(){
  return this.http.get(`${this.BASE_URL}/groups`)

}


// to add contact api-post
addContact(contact:Contactschema){

  // Constructs a POST request that interprets the body as JSON and returns the response body as an object parsed from
   return this.http.post(`${this.BASE_URL}/contacts`,contact)
}

deletecontact(id:any){
 return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
}


// edot contact
editcontact(id:any,body:Contactschema){
// make api call to  http://localhost:3000/contacts/id
 return this.http.put(`${this.BASE_URL}/contacts/${id}`,body)
}

}