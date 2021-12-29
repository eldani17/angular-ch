import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  public login(email: string, password: string): Observable<any> {
    return of({ status: 200, token: "lalala" });
  }
}
