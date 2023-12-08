import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';

import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { LoginRequestInterface } from 'src/app/shared/types/login-request.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorInterface}>()
);
