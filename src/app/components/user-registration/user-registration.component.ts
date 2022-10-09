import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/customer';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  customer: Customer= new Customer();
  

  constructor(public registation: RegistrationService ) {}
   

  ngOnInit(): void {
  }
  registar(){
    this.registation.registarCustomer(this.customer).subscribe(response=>{
      console.log(this.customer)
      alert("Customer registared successfully")
      location.reload()
       },
       function(error: any){
        console.log(error)
        alert("Something wrong in Customer Registration")
       } )
  }

}
