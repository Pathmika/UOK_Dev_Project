import { Component, OnInit } from "@angular/core";
import { Feedback } from "../feedback.model";
import { Feedbackservice } from "../feedback/feedback.service";
import { PlantService } from "../plant.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-admin-panel-home",
  templateUrl: "./admin-panel-home.component.html",
  styleUrls: ["./admin-panel-home.component.css"]
})
export class AdminPanelHomeComponent implements OnInit {
  repF: boolean = true;
  repO1: boolean = true;
  //rufeedback: Feedback[] = [];
  i: number = 0;
  rfeedback: any[] = [];
  rorder: any[] = [];
  oplants: string = "";

  constructor(
    public feedbackService: Feedbackservice,
    public plantservice: PlantService
  ) {}

  ngOnInit() {
    this.feedbackService.getFeedbacks().subscribe(feedbackdocs => {
      this.rfeedback = feedbackdocs.feedbacks;
    });
    // this.plantservice.getOrders().subscribe(orderdocs => {
    //   this.rorder = orderdocs.orders;
    //   for (this.i; this.rorder.length; this.i++) {
    //     this.oplants = this.oplants + "," + this.rorder[this.i];
    //   }
    // });
  }
  onReportFeedback() {
    this.repF = false;
    this.repO1 =true;
  }
  onReportOrders() {
    this.repO1 = false;
    this.repF=true
  }
}
