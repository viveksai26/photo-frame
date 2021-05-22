import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarComponent } from './modules/core/services/notification/snackbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ErrorModule } from './modules/core/errors/error.module';
import { PublicModule } from './modules/feature/public/public.module';
import { SecureModule } from './modules/feature/secure/secure.module';
import { SharedModule } from './modules/shared/shared.module';
import { BlockUIModule } from 'ng-block-ui';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
const googleLoginOptions = {
  scope: 'profile email photoslibrary'
};
@NgModule({
  declarations: [AppComponent, SnackBarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorModule,
    PublicModule,
    SecureModule,
    SharedModule,
    SocialLoginModule,
    BlockUIModule.forRoot({
      // template: BlockTemplateCmp,
      message: 'Loading.................'
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.gsignIn.web.client_id, googleLoginOptions)
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
