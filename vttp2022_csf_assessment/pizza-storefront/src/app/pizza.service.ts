// Implement the methods in PizzaService for Task 3
// Add appropriate parameter and return type 

import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  // POST /api/order
  // Add any required parameters or return type
  createOrder(payload: any) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accepts', 'application/json')

    console.info(">>> payload", payload);
    return firstValueFrom(
        this.http.post<any>('/api/order', payload, {headers}).pipe()
    )

  }

  // GET /api/order/<email>/all
  // Add any required parameters or return type
  getOrders(email: string) {

    const params = new HttpParams().set("email", email)
                  
    return firstValueFrom(
      this.http.get<any>(`/api/order/${email}/all`)
    )

  }

}
