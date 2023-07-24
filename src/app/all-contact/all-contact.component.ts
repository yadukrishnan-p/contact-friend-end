import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})

// OnInit() is in interface, then we can access it by using 'impiments' keyword
export class AllContactComponent implements OnInit {

    searchkey:string=""
  allcontact:any = []


  isLoading : boolean=true
  errorMsg: any

  constructor(private api : ApiService) {}
  
 ngOnInit(): void {
  this.getAllContact();
 }

  getAllContact(){
  this.api.getALLContact().subscribe({
    //  console.log(result);

     next: (response:any) => {
      // console.log(response);
      setTimeout(()=>{
         this.allcontact=response
            this.isLoading=false
      },2000)
     
      
     },
     error: (err:any) => {
      console.log(err.message);
      this.errorMsg=err.message
      this.isLoading=false
     }
     
  })
 }
 

 deletecontact(id:any){
  this.api.deletecontact(id).subscribe({
    next:(reponse:any)=>{
     this.getAllContact();
    }
  })
  
 }

}
