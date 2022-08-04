import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://dev-e2l6sw0y.us.auth0.com',
      redirectUrl: 'http://localhost:4200/callback',
      clientId: '9L0E2z8HBn9jXLqhaMc0qleRfZitvqlD',
      scope: 'openid profile offline_access',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      secureRoutes: ['http://localhost:8080'],
      customParamsAuthRequest : {
        audience: 'http://localhost:8080'
      }
    }
  })],
  exports: [AuthModule],
})
export class AuthConfigModule {}
