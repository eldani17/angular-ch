import { Component, OnInit } from "@angular/core";
import {
  IProducts,
  MockProductsService,
} from "./../../services/mock-products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: IProducts[] = [];
  constructor(private mockProductsServcice: MockProductsService) {}

  ngOnInit(): void {
    this.mockProductsServcice
      .getProducts()
      .subscribe((response: IProducts[]) => {
        this.products = response;
        console.log(this.products);
      });
  }
}
