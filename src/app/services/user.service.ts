import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interfaces/UserInterface";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) {
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  save(user: UserInterface) {
    return this.http.post<UserInterface>(`${environment.api}/api/user`, user);
  }

  getAll() {
    return this.http.get<UserInterface[]>(`${environment.api}/api/user`);
  }

  getById(id: string) {
    return this.http.get(`${environment.api}/api/user/${id}`);
  }

  login(user: { email: string, password: string }) {
    return this.http.post<{ token: string }>(`${environment.api}/api/auth/login`, user).pipe(
      tap((token) => localStorage.setItem('token', token.token))
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/api/user/${id}`);
  }

  update(user: UserInterface, id: string) {
    return this.http.put<UserInterface>(`${environment.api}/api/user/${id}`, user);
  }

}
