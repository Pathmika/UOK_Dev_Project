import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { PlantService } from "../plant.service";
import { Plant } from "../plant.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-supplier-add",
  templateUrl: "./supplier-add.component.html",
  styleUrls: ["./supplier-add.component.css"]
})
export class SupplierAddComponent implements OnInit, OnDestroy {
  Splants: Plant[];
  private plantSub: Subscription;
  constructor(public plantService: PlantService) {}

  ngOnInit() {
    this.plantService.getPlants();
    this.plantSub = this.plantService
      .getPlantUpdateListener()
      .subscribe((plants: Plant[]) => {
        this.Splants = plants;
        console.log(this.Splants);
      });
  }
  ngOnDestroy() {
    this.plantSub.unsubscribe();
  }
}
