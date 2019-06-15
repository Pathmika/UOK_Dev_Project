export interface ConfirmedOrder {
  oid: string;
  orderDate: string;
  oissueDate: string;
  oPlants: any[];
  ototAmount: number;
  ototDiscount: number;
  oCustomerId: string;
}
