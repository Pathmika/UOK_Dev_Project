import { Component, OnInit } from "@angular/core";
import { PlantService } from "../plant.service";
import { OrderList } from "../orderlist.model";

@Component({
  selector: "app-plants-order-list",
  templateUrl: "./plants-order-list.component.html",
  styleUrls: ["./plants-order-list.component.css"]
})
export class PlantsOrderListComponent implements OnInit {
  model1;
  model2;
  orderList: OrderList[] = [];
  issueDate: string = "Sat Jun 15 2019";
  totAmount: number = 0;
  totDiscount: number = 0;
  userStatus: boolean;

  constructor(public plantService: PlantService) {}

  ngOnInit() {
    this.userStatus = true;
    this.orderList = this.plantService.getOrderList();
    this.totAmount = this.plantService.getTotalAmount();
    this.totDiscount = this.plantService.getTotalDiscount();

    // for (this.i = 0; this.i <= this.orderList.length; this.i++) {
    //   this.plname[this.i] = this.orderList[this.i].oplname;
    //   this.opqty[this.i] = this.orderList[this.i].oqty;
    //   this.oDiscount[this.i] = this.orderList[this.i].odiscount;
    //   this.osubTotal[this.i] = this.orderList[this.i].osubtotal;
    // }
  }
  onConfirm(issueDate: Date) {
    //this.issueDate = issueDate.toDateString();
    this.plantService.setOrderIssueDate(this.issueDate);
  }
}
