import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from '@core/services/errors.service';
import { NotificationService } from '@core/services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }
  
  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorsService);
    const notifier = this.injector.get(NotificationService);

    let message:any;
    let stackTrace:any;
    
    console.log("hello",HttpErrorResponse)
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      //stackTrace = errorService.getServerErrorStackTrace(error);

      notifier.showError(message);
    } else {
      // Client Error
      message = errorService.getClientErrorMessage(error);
      console.log(message);
      notifier.showError(message);
    }
    // Always log errors
    // logger.logError(message, stackTrace);
  }
}