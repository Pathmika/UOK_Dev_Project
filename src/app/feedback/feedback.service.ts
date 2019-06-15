import { Feedback } from "../feedback.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class Feedbackservice {
  private feedbacks: any[] = [];
  private feedbacksUpdated = new Subject<Feedback[]>();

  constructor(private http: HttpClient) {}

  getFeedbacks() {
    return this.http.get<{ message: string; feedbacks: any }>(
      "http://localhost:3000/api/feedbacks"
    );
  }
  addFeedbacks(
    fcfname: string,
    fclname: string,
    fdate: string,
    fperspective: string,
    ftype: string,
    fpcategory: string,
    fmessage: string
  ) {
    const feedback: Feedback = {
      fid: null,
      fcfname: fcfname,
      fclname: fclname,
      fdate: fdate,
      fperspective: fperspective,
      ftype: ftype,
      fpcategory: fpcategory,
      fmessage: fmessage
    };
    this.http
      .post<{ message: string }>(
        "http://localhost:3000/api/feedbacks",
        feedback
      )
      .subscribe(fresponseData => {
        console.log(fresponseData.message);
        this.feedbacks.push(feedback);
        this.feedbacksUpdated.next([...this.feedbacks]);
      });
  }
}
