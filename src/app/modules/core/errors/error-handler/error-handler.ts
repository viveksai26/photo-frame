import { Injectable, Injector, NgZone, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorServiceService } from '../error-service/error-service.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}
  handleError(error: Error | HttpErrorResponse): any {
    const errorService = this.injector.get(ErrorServiceService);
    const router = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);
    if (error instanceof HttpErrorResponse) {
      return error;
    }
    console.error(error);
    // errorService.log(error).subscribe((errorWithContext) => {
    //   ngZone.run(() => {
    //     router.navigate(['/error'], { queryParams: { error: errorWithContext } });
    //   });
    // });
  }
}
