import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { createAction, props } from "@ngrx/store";

import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterRequestInterface } from 'src/app/shared/types/register-request.interface';
import { ActionTypes } from './actions/actionTypes';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterRequestInterface}>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE, props<{errors: BackendErrorInterface}>()
);
