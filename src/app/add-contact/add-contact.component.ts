import { Component, OnInit } from '@angular/core';
import { Contactschema } from 'src/model/contact-schema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
// contact={} is an object used to import class (contactschema)

contact:Contactschema={}


groups: any=[]
constructor(private api : ApiService, private addContactRouter:Router){
 
}
  ngOnInit():void{
    this.api.getGroups().subscribe({
      next:(Response:any)=>{
        console.log(Response);
        this.groups=Response
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
  }

  addContact(contact:Contactschema){
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
  
        // data added into server
        console.log(response);

        // navigate to all contact page
        this.addContactRouter.navigateByUrl('')
      },

      error:(err:any)=>{
        console.log(err.messege);
      
      }
    })
  }
}