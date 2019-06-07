import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { PlantService } from "../plant.service";
import { Plant } from "../plant.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-plants",
  templateUrl: "./plants.component.html",
  styleUrls: ["./plants.component.css"]
})
export class PlantsComponent implements OnInit, OnDestroy {
  // plants = [
  //   {plantname:'Potted Black Pepper', description:'Potted black pepper is for limited gardening space'},
  //   {plantname:'Budded Mango', description:'Budded mango is delicious'},
  //   {plantname:'Red Palm', description:'Gorgeous plant which brings great look to the garden'}
  // ]
  plants: Plant[];
  private plantSub: Subscription;
  constructor(public plantService: PlantService) {}

  ngOnInit() {
    this.plantService.getPlants();
    this.plantSub = this.plantService
      .getPlantUpdateListener()
      .subscribe((plants: Plant[]) => {
        this.plants = plants;
        console.log(this.plants);
      });
  }

  ngOnDestroy() {
    this.plantSub.unsubscribe();
  }
}
