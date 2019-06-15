import { Component, OnInit } from "@angular/core";
import { NgForm, Validators } from "@angular/forms";
import { Feedbackservice } from "./feedback.service";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"]
})
export class FeedbackComponent implements OnInit {
  dcfname = "";
  dclname = "";
  fdate = new Date();

  constructor(public feedbackService: Feedbackservice) {}

  ngOnInit() {}
  onAddFeedback(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // const feedback: Feedback = {
    //   cfname: this.dcfname,
    //   clname: this.dclname,
    //   fdate: this.dfdate
    // };
    this.feedbackService.addFeedbacks(
      form.value.fcfname,
      form.value.fclname,
      this.fdate.toDateString(),
      form.value.fperspective,
      form.value.ftype,
      form.value.fpcategory,
      form.value.fmessage
    );
    form.resetForm();
  }
}
