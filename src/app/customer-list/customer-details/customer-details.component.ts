import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetails, CustomerDetailsService } from 'src/app/services/customer-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  selectedCustomer: CustomerDetails | undefined;

  constructor(private activatedRoute: ActivatedRoute, private customerDetailedService: CustomerDetailsService) { }

  ngOnInit() {
    const customerId = this.activatedRoute.snapshot.params["customer-id"];
    if(customerId){
      this.selectedCustomer = this.customerDetailedService.customerDetails.find(a => a.id === customerId)
    }
    console.log(this.selectedCustomer);
  }

}
