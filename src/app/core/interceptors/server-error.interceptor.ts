import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)

      .pipe(

        retry(1),

        catchError((error: HttpErrorResponse) => {

          let errorMessage:any = {};
          if (error.error instanceof ErrorEvent) {

            // client-side error
            errorMessage.status=error.status;

            errorMessage.message = `Error: ${error.error.message ? error.error.message : error.message}`;

          } else {
            // server-side error
            errorMessage.status=error.status;
            errorMessage.message = `Message: ${error.error.message ? error.error.message : error.message}`;
          }

          // window.alert(errorMessage);

          return throwError(errorMessage);

        })

      )
  }
}
