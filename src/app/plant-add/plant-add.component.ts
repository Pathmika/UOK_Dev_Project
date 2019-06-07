import { Component, OnInit } from "@angular/core";
import { PlantService } from "../plant.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-plant-add",
  templateUrl: "./plant-add.component.html",
  styleUrls: ["./plant-add.component.css"]
})
export class PlantAddComponent implements OnInit {
  pname = "";
  pcategory = "";
  pdescription = "";
  image: File;

  constructor(public plantService: PlantService) {}

  ngOnInit() {}

  onAddPlants(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.plantService.addPlants(
      form.value.pname,
      form.value.pcategory,
      form.value.punitPrice,
      form.value.pdescription
    );
    form.resetForm();
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.image = file;
    console.log(this.image);
  }
}
