import { Injectable } from '@angular/core';

interface Customer{
  id: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  customerList: Customer[] = [
    {
      id: "1",
      username: "Bazera"
    },
    {
      id: "2",
      username: "Baxto"
    },
    {
      id: "3",
      username: "John"
    },
  ]

  constructor() { }

}
