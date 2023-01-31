import { Component, OnInit } from '@angular/core';
import { CustomerListService } from '../services/customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  get customers(){
    return this.customerListService.customerList;
  }

  constructor(private customerListService: CustomerListService) { }

  ngOnInit() {
  }

}
