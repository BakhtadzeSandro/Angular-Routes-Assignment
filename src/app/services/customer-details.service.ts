import { Injectable } from '@angular/core';

export interface CustomerDetails{
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  aboutMe: string
}

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  customerDetails: CustomerDetails[] = [
    {
      "id": "1",
      "username": "Bazera",
      "firstName": "Giorgi",
      "lastName": "Bazerashvili",
      "aboutMe": "About Bazera"
    },
    {
      "id": "2",
      "username": "Baxto",
      "firstName": "Sandro",
      "lastName": "Baxtadze",
      "aboutMe": "About Baxto"
    },
    {
      "id": "3",
      "username": "John",
      "firstName": "John",
      "lastName": "Doe",
      "aboutMe": "About John"
    }
  ]

  constructor() { }

}
