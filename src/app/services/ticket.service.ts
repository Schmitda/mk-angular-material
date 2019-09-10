import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TicketInterface} from "../interfaces/TicketInterface";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) { }

  save(ticket: TicketInterface) {
    return this.http.post<TicketInterface>(`${environment.api}/api/ticket`, ticket);
  }

  getAll() {
    return this.http.get(`${environment.api}/api/ticket`);
  }

  getById(id: string) {
    return this.http.get<TicketInterface>(`${environment.api}/api/ticket/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/api/ticket/${id}`);
  }

  update(ticket: TicketInterface, id: string) {
    return this.http.put<TicketInterface>(`${environment.api}/api/ticket/${id}`, ticket);
  }
}
