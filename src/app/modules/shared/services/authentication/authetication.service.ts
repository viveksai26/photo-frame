import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { ApiUrls } from '../../constants/api-urls';
import { AppConstants } from '../../constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  constructor(private http: HttpClient) {}
  isLoggedIn: boolean = false;
  verifyGToken(idToken: string): Observable<any> {
    return this.http.get<any>(ApiUrls.verifyGIdToken.replace('{idToken}', idToken));
  }
  connectToPhotos() {
    return this.http.get<any>(ApiUrls.photoURL);
  }
}
