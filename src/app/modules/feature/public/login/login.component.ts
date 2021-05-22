import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AppConstants } from 'src/app/modules/shared/constants/app-constants';
import { AutheticationService } from 'src/app/modules/shared/services/authentication/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {}
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user: { idToken: string; authToken: string; }) => {
        localStorage.setItem(AppConstants.G_ID_TOKEN, user.idToken);
        localStorage.setItem(AppConstants.G_AUTH_TOKEN, user.authToken);
        console.log(user);
        this.router.navigate(['dashboard']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
