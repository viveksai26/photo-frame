import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RoutePathConstant } from '../../shared/constants/route-path-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<any> {
    return of(true);
  }
}
