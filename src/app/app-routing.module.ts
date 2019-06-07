import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PlantsComponent } from "./plants/plants.component";
import { PlantsOrderOneComponent } from "./plants-order-one/plants-order-one.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { PlantOrderProceedModelComponent } from "./plant-order-proceed-model/plant-order-proceed-model.component";
import { PlantAddComponent } from "./plant-add/plant-add.component";
import { AdminPanelHomeComponent } from "./admin-panel-home/admin-panel-home.component";
import { PlantsOrderListComponent } from "./plants-order-list/plants-order-list.component";
import { PlantInvoiceComponent } from "./plant-invoice/plant-invoice.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "plants", component: PlantsComponent },
  {
    path: "plantsorderone/:pid",
    component: PlantsOrderOneComponent
  },
  { path: "feedbackform", component: FeedbackComponent },
  { path: "plantOrderModal", component: PlantOrderProceedModelComponent },
  { path: "plantAdd", component: PlantAddComponent },
  { path: "adminpanel", component: AdminPanelHomeComponent },
  { path: "plantorderlist", component: PlantsOrderListComponent },
  { path: "plantinvoice", component: PlantInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
