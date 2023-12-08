import { GetCurrentUserEffect } from 'src/app/auth/store/effects/get-current-user.effect';
import { LoginComponent } from 'src/app/auth/components/login-component/login.component';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';

import {RegisterComponent} from 'src/app/auth/components/register-component/register.component'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/auth/store/actions/reducers'
import { AuthService } from 'src/app/auth/services/auth.service'
import { EffectsModule } from '@ngrx/effects'


const routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [
    AuthService,
    PersistanceService
  ]
})
export class AuthModule {}
