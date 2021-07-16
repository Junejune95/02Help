import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  getClientErrorMessage(err: Error): any {
    return err;
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ?
      error.message :
      'No Internet Connection';
  }
}
