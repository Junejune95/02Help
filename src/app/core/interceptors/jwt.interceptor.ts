import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from "@core/authentication/authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let ignore =
            typeof req.body === "undefined"
            || req.body === null
            || req.body.toString() === "[object FormData]" // <-- This solves your problem
            || req.headers.has("Content-Type");

        const userToken = this.authenticationService.currentToken;
        if (ignore) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${userToken}`)
            });
            return next.handle(cloned);
        }


        const cloned = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            }
        });
        return next.handle(cloned);
    }
}
