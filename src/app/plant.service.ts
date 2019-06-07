import { Plant } from "./plant.model";
import { OrderList } from "./orderlist.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PlantService {
  private plant: Plant;
  private plantReturned = new Subject<Plant>();
  private plants: Plant[] = [];
  private plantsUpdated = new Subject<Plant[]>();

  private orderListarr: OrderList[] = [];
  private Fiorderlist: OrderList[] = [];
  private totAmount: number = 0;
  private totDiscount: number = 0;

  constructor(private http: HttpClient) {}

  getPlants() {
    this.http
      .get<{ message: string; plants: any }>("http://localhost:3000/api/plants")
      .pipe(
        map(plantData => {
          return plantData.plants.map(plant => {
            return {
              pname: plant.pname,
              pcategory: plant.pcategory,
              pdescription: plant.pdescription,
              punitPrice: plant.punitPrice,
              pid: plant._id
            };
          });
        })
      )
      .subscribe(transformedPlants => {
        this.plants = transformedPlants;
        this.plantsUpdated.next([...this.plants]);
      });
  }
  getPlant(plantId: string) {
    return this.http.get<{ message: string; plant: Plant }>(
      "http://localhost:3000/api/plants/" + plantId
    );
  }
  getPlantOneUpdateListner() {
    return this.plantReturned.asObservable();
  }
  getPlantUpdateListener() {
    return this.plantsUpdated.asObservable();
  }

  addPlants(
    pname: string,
    pcategory: string,
    punitPrice: number,
    pdescription: string
  ) {
    const plant: Plant = {
      pid: null,
      pname: pname,
      pcategory: pcategory,
      punitPrice: punitPrice,
      pdescription: pdescription
    };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/plants", plant)
      .subscribe(plresponseData => {
        console.log(plresponseData.message);
        this.plants.push(plant);
        this.plantsUpdated.next([...this.plants]);
      });
  }
  updateOrderList(
    oplname: string,
    oqty: number,
    odiscount: number,
    osubtotal: number
  ) {
    this.totDiscount = this.totDiscount + odiscount;
    this.totAmount = this.totAmount + osubtotal;
    const orderList: OrderList = {
      oplname: oplname,
      oqty: oqty,
      odiscount: odiscount,
      osubtotal: osubtotal
    };
    this.orderListarr.push(orderList);
  }

  getOrderList() {
    return this.orderListarr;
  }

  clearOrderList() {
    this.orderListarr = [];
  }

  getTotalAmount() {
    return this.totAmount;
  }

  getTotalDiscount() {
    return this.totDiscount;
  }
  //Method to send the confirmed order To database after the confirm button clicked in template
  addOrder() {}
}
