import { Injectable, NgZone } from '@angular/core';
// import {
//   MatSnackBar,
//   MatSnackBarHorizontalPosition,
//   MatSnackBarVerticalPosition,
// } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  // verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    // public snackBar: MatSnackBar,
    private zone: NgZone,
    private _router:Router,
    private _loc:Location) { }

  showSuccess(message: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
    // this.zone.run(() => {
    //   this.snackBar.open(message);
    // });
  }

  showError(message: any): void {
    this.zone.run(() => {
      // The second parameter is the text in the button. 
      // In the third, we send in the css class for the snack bar.
      // this.snackBar.open(message, 'X', {
      //   panelClass: ['red-snackbar'],
      //   duration: 5000,
      //   horizontalPosition: this.horizontalPosition,
      //   verticalPosition: this.verticalPosition,
      // });
      // this._loc.back();
      console.log(message);
      if(message.status=="404")
      this._router.navigateByUrl("404");
      else {
        this._router.navigateByUrl("found-error");
        localStorage.setItem('errorMessage',JSON.stringify(message));
      }
    });
  }
}
