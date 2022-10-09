import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURL="http://localhost:9091/customer";

  constructor(private httpClient: HttpClient) { }

  registarCustomer(customer: any){
    return this.httpClient.post('${this.baseURL}', customer);
  }
}
