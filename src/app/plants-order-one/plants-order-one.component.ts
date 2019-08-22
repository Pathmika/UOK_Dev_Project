import { Component, OnInit } from "@angular/core";
import { PlantService } from "../plant.service";
import { Plant } from "../plant.model";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
//For Continue Order Model
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-plants-order-one",
  templateUrl: "./plants-order-one.component.html",
  styleUrls: ["./plants-order-one.component.css"]
})
export class PlantsOrderOneComponent implements OnInit {
  oDiscount: number;
  subTotal: number;
  PlantName = "";
  UnitPrice = 0;
  plant: Plant;
  private plantSub: Subscription;
  currentPlantId: string;
  pname: string;
  pcategory: string;
  pdescription: string;
  punitprice: number;
  pqty: number;
  orderqty: number;
  oplname: string;

  orderList: any[];

  constructor(
    public activate: ActivatedRoute,
    public plantService: PlantService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.currentPlantId = this.activate.snapshot.params["pid"];
    console.log(this.currentPlantId);
    this.plantService.getPlant(this.currentPlantId).subscribe(plantdocument => {
      this.pname = plantdocument.plant.pname;
      this.pcategory = plantdocument.plant.pcategory;
      this.pdescription = plantdocument.plant.pdescription;
      this.punitprice = plantdocument.plant.punitPrice;
      this.pqty = plantdocument.plant.pstock;
      console.log(plantdocument.plant);
    });
  }

  // onAddToOrderList() {
  //   this.OrderQty = 4;
  //   this.PlantName = "Potted Black Pepper";
  //   this.UnitPrice = 250;
  // }

  onupdateOrderlist(orderQty: number, plname: string) {
    this.orderqty = orderQty;
    this.oplname = plname;
    this.oDiscount = this.calcDiscount(orderQty);
    this.subTotal = orderQty * this.punitprice - this.oDiscount;
    //Pass this sub and the discount to a method in plant service
    this.plantService.updateOrderList(
      this.oplname,
      this.orderqty,
      this.oDiscount,
      this.subTotal
    );
  }

  openContModel(content, orderQty: number) {
    this.onupdateOrderlist(orderQty, this.pname);
    this.modalService.open(content, { size: "sm" });
  }

  calcDiscount(qty: number): number {
    if (qty >= 50) {
      return qty * 10;
    } else if (qty >= 5) {
      return qty * 5;
    } else return 0;
  }
}
