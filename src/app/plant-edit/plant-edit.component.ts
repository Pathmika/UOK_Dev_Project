import { Component, OnInit, OnDestroy } from "@angular/core";
import { PlantService } from "../plant.service";
import { Plant } from "../plant.model";
import { Subscription } from "rxjs";
@Component({
  selector: "app-plant-edit",
  templateUrl: "./plant-edit.component.html",
  styleUrls: ["./plant-edit.component.css"]
})
export class PlantEditComponent implements OnInit, OnDestroy {
  plantsEdit: Plant[];
  private plantSub: Subscription;
  constructor(public plantService: PlantService) {}

  ngOnInit() {
    this.plantService.getPlants();
    this.plantSub = this.plantService
      .getPlantUpdateListener()
      .subscribe((plants: Plant[]) => {
        this.plantsEdit = plants;
        console.log(this.plantsEdit);
      });
  }
  ngOnDestroy() {
    this.plantSub.unsubscribe();
  }

  onDelete(plantId: string) {
    this.plantService.deletePlant(plantId);
  }
}
