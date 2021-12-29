import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface IPriceList {
  idPriceList: number;
  name: string;
  price: number;
}

export interface IProducts {
  id: number;
  name: string;
  description: string;
  reference: string;
  price: IPriceList[];
}

@Injectable({
  providedIn: "root",
})
export class MockProductsService {
  constructor() {}

  getProducts(): Observable<IProducts[]> {
    return of([
      {
        id: 1,
        name: "Billetera",
        description: "Billetera de cuero negro",
        reference: "REF-005",
        price: [
          {
            idPriceList: 1,
            name: "General",
            price: 1200,
          },
          {
            idPriceList: 2,
            name: "Distribuidor",
            price: 1050,
          },
        ],
      },
      {
        id: 2,
        name: "Cartera",
        description: "Cartera de cuero color café",
        reference: "CAR-195",
        price: [
          {
            idPriceList: 1,
            name: "General",
            price: 1200,
          },
          {
            idPriceList: 2,
            name: "Distribuidor",
            price: 3900,
          },
          {
            name: "Mayorista",
            idPriceList: 6,
            price: 3700,
          },
        ],
      },
      {
        id: 3,
        name: "Diseño de monedero ",
        description: "Diseño de monedero en cuero.",
        reference: "",
        price: [
          {
            idPriceList: 1,
            name: "General",
            price: 1200,
          },
        ],
      },
    ]);
  }
}
