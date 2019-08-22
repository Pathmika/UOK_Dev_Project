import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { setDate } from "ngx-bootstrap/chronos/utils/date-setters";
import { getFullYear } from "ngx-bootstrap";
import * as jsPDF from "jspdf";
import { OrderList } from "../orderlist.model";
import { PlantService } from "../plant.service";
import html2canvas from "html2canvas";

@Component({
  selector: "app-plant-invoice",
  templateUrl: "./plant-invoice.component.html",
  styleUrls: ["./plant-invoice.component.css"]
})
export class PlantInvoiceComponent implements OnInit {
  customerName: string;
  orderedDate: Date = new Date();
  inumber: string;
  odate: string;
  issueDate: string;
  corderList: OrderList[] = [];
  oTotalAmnt: number;

  constructor(public plantService: PlantService) {}

  ngOnInit() {
    this.corderList = this.plantService.getOrderList();

    this.customerName = "N.G Perera";
    this.inumber = "I" + "001";
    this.odate = this.orderedDate.toDateString();
    this.issueDate = this.plantService.getOrderIssueDate();
    this.oTotalAmnt = this.plantService.getTotalAmount();

    this.plantService.addOrder(this.odate, this.issueDate, this.inumber);
  }

  // @ViewChild("content") content: ElementRef;
  // public downloadPDF() {
  //   let doc = new jsPDF();

  //   let specialElementHandlers = {
  //     "#editor": function(element, renderer) {
  //       return true;
  //     }
  //   };

  //   let content = this.content.nativeElement;

  //   doc.fromHTML(content.innerHTML, 20, 10, {
  //     width: 500,
  //     elementHandlers: specialElementHandlers
  //   });
  //   doc.save("Invoice.pdf");
  // }

  public downloadInvoice() {
    html2canvas(document.getElementById("content")).then(function(canvas) {
      //document.body.appendChild(canvas);
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, "JPEG", 5, 20);
      doc.save("Invoice.pdf");
    });
  }
}
