import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//HttpClient
import { HttpClientModule } from "@angular/common/http";

//Angular Material Imports
import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule
} from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
//Other imports
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { PlantsComponent } from "./plants/plants.component";
import { LoginComponent } from "./login/login.component";

import { HeaderComponent } from "./header/header.component";
import { HomeCarousalComponent } from "./home-carousal/home-carousal.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PlantsOrderOneComponent } from "./plants-order-one/plants-order-one.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";

import { CarouselModule } from "ngx-bootstrap/carousel";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDropdownModule } from "ngx-bootstrap";
import { ModalModule } from "ngx-bootstrap";

import { PlantsOrderListComponent } from "./plants-order-list/plants-order-list.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { PlantOrderProceedModelComponent } from "./plant-order-proceed-model/plant-order-proceed-model.component";
import { PlantAddComponent } from "./plant-add/plant-add.component";
import { AdminPanelHeaderComponent } from "./admin-panel-header/admin-panel-header.component";
import { AdminPanelSidebarComponent } from "./admin-panel-sidebar/admin-panel-sidebar.component";
import { PlantEditComponent } from "./plant-edit/plant-edit.component";
import { AdminPanelHomeComponent } from "./admin-panel-home/admin-panel-home.component";
import { PlantDeleteComponent } from "./plant-delete/plant-delete.component";
import { PlantInvoiceComponent } from './plant-invoice/plant-invoice.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlantsComponent,
    LoginComponent,
    HeaderComponent,
    HomeCarousalComponent,
    PlantsOrderOneComponent,
    FeedbackComponent,
    PlantsOrderListComponent,
    UserRegistrationComponent,
    PlantOrderProceedModelComponent,
    PlantAddComponent,
    AdminPanelHeaderComponent,
    AdminPanelSidebarComponent,
    PlantEditComponent,
    AdminPanelHomeComponent,
    PlantDeleteComponent,
    PlantInvoiceComponent,
    ContactComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    MatMenuModule,
    CarouselModule.forRoot(),
    NgbModule,
    NgbDatepickerModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
