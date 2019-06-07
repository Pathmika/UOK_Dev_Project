import { Component, OnInit } from "@angular/core";
import { TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-plant-order-proceed-model",
  templateUrl: "./plant-order-proceed-model.component.html",
  styleUrls: ["./plant-order-proceed-model.component.css"]
})
export class PlantOrderProceedModelComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {}
}
