import { Component } from '@angular/core';
import { Customer } from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
  styleUrls: ['./app.component.css']
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel:Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>(); 

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //clear the UI or reset the table

  }
  }
  

