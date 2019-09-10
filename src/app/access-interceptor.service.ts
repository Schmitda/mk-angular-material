import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, filter, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccessInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((errResponse: HttpErrorResponse | any) => {
        if (errResponse.status === 401) {
          this.router.navigateByUrl('/login');
        }
        return of(errResponse);
      })
    );
  }
}
