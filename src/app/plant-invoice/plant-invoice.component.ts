import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { setDate } from "ngx-bootstrap/chronos/utils/date-setters";
import { getFullYear } from "ngx-bootstrap";
import * as jsPDF from "jspdf";
import { OrderList } from "../orderlist.model";
import { PlantService } from "../plant.service";

@Component({
  selector: "app-plant-invoice",
  templateUrl: "./plant-invoice.component.html",
  styleUrls: ["./plant-invoice.component.css"]
})
export class PlantInvoiceComponent implements OnInit {
  customerName: string;
  orderedDate: Date;
  inumber: string;
  corderList: OrderList[] = [];

  constructor(public plantService: PlantService) {}

  ngOnInit() {
    this.corderList = this.plantService.getOrderList();
    this.customerName = "N.G Perera";
    this.inumber = "I" + "001";
    //this.orderedDate.setFullYear(2019, 6, 2);
  }

  @ViewChild("content") content: ElementRef;
  public downloadPDF() {
    let doc = new jsPDF();

    let specialElementHandlers = {
      "#editor": function(element, renderer) {
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 20, 10, {
      width: 500,
      elementHandlers: specialElementHandlers
    });
    doc.save("Invoice.pdf");
  }
}
