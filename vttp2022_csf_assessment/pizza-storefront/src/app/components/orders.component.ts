import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order : [] = []

  constructor(private http: HttpClient, private mainSvc: MainService) { }

  ngOnInit(): void {
    this.order = this.mainSvc.orderList
    console.info(">>>>> order list ", this.order)
  }

}
