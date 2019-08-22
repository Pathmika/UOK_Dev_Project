import { Plant } from "./plant.model";
import { OrderList } from "./orderlist.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ConfirmedOrder } from "./forder.model";

@Injectable({ providedIn: "root" })
export class PlantService {
  private plant: Plant;
  private plantReturned = new Subject<Plant>();
  private plants: Plant[] = [];
  private forders: ConfirmedOrder[] = [];
  private plantsUpdated = new Subject<Plant[]>();
  private ordersUpdated = new Subject<ConfirmedOrder[]>();

  private orderListarr: OrderList[] = [];
  private Fiorderlist: OrderList[] = [];
  private oL: OrderList; //orderList for stock update purpose
  private oqtyToBeUpdated: number;
  private pidList: string[]; //IdList of plants for stock update
  private totAmount: number = 0;
  private totDiscount: number = 0;
  private oftotAmount: number;
  private oftotDiscount: number;

  private OIssueDate: string;

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
              pid: plant._id,
              pimage: plant.pimage,
              pstock: plant.pstock
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
    pdescription: string,
    pstock: number
    //pimage: string
  ) {
    const plant: Plant = {
      pid: null,
      pname: pname,
      pcategory: pcategory,
      punitPrice: punitPrice,
      pdescription: pdescription,
      pstock: pstock
      //pimage: pimage
    };
    this.http
      .post<{ message: string; plantId: string }>(
        "http://localhost:3000/api/plants",
        plant
      )
      .subscribe(plresponseData => {
        const plId = plresponseData.plantId;
        plant.pid = plId;
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

  //Delete Plant
  deletePlant(plantId: string) {
    this.http
      .delete("http://localhost:3000/api/plants/" + plantId)
      .subscribe(() => {
        const updatedPlants = this.plants.filter(
          plant => plant.pid !== plantId
        );
        this.plants = updatedPlants;
        this.plantsUpdated.next([...this.plants]);
      });
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

  setOrderIssueDate(issueDate: string) {
    this.OIssueDate = issueDate;
  }
  getOrderIssueDate() {
    return this.OIssueDate;
  }
  //method to update stock
  updateStock() {
    this.orderListarr.forEach(orderList => {
      orderList.oqty;
    });
  }

  //Method to send the confirmed order To database after the confirm button clicked in template
  addOrder(orderDate: string, oissueDate: string, oCustomerId: string) {
    this.updateStock();
    this.oftotAmount = this.getTotalAmount();
    this.oftotDiscount = this.getTotalDiscount();

    //final order
    const forder: ConfirmedOrder = {
      oid: null,
      orderDate: orderDate,
      oissueDate: oissueDate,
      oPlants: this.getOrderList(),
      ototAmount: this.oftotAmount,
      ototDiscount: this.oftotDiscount,
      oCustomerId: oCustomerId
    };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/orders", forder)
      .subscribe(ordresponseData => {
        console.log(ordresponseData.message);
        this.forders.push(forder);
        this.ordersUpdated.next([...this.forders]);
      });
  }
  getOrders() {
    return this.http.get<{ message: string; orders: any }>(
      "http://localhost:3000/api/orders"
    );
  }
}
