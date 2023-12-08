import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from './get-current-user.action';
import { loginAction, loginSuccessAction, loginFailureAction } from './login-action';
import { registerFailureAction } from './../register.actions';
import { registerSuccessAction } from 'src/app/auth/store/register.actions';
import { Action, createReducer, on, Store } from '@ngrx/store';

import { registerAction } from 'src/app/auth/store/register.actions';
import { AuthStateInterface } from 'src/app/auth/types/auth-state.interface';
const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationError: null,
  isLoggedIn: null
}

const authReducer = createReducer(initialState, on(registerAction,(state): AuthStateInterface => ({
  ... state,
  isSubmitting: true,
  validationError: null
})),
on(registerSuccessAction, (state, action): AuthStateInterface => ({
  ...state,
  isSubmitting: false,
  isLoggedIn: true,
  currentUser: action.currentUser
})),
on(registerFailureAction, (state, action): AuthStateInterface => ({
  ...state,
  isSubmitting: false,
  validationError: action.errors
})),
on(loginAction, (state): AuthStateInterface => ({
  ...state,
  isSubmitting: true,
  validationError: null
})),
on(loginSuccessAction, (state, action): AuthStateInterface => ({
  ...state,
  isSubmitting: false,
  isLoggedIn: true,
  currentUser: action.currentUser
})),
on(loginFailureAction, (state, action): AuthStateInterface => ({
  ...state,
  isSubmitting: false,
  validationError: action.errors
})),
on(getCurrentUserAction, (state): AuthStateInterface=> ({
  ...state,
  isLoading: true
})),
on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
  ...state,
  isLoading: false,
  isLoggedIn: true,
  currentUser: action.currentUser
})),
on(getCurrentUserFailureAction, (state): AuthStateInterface => ({
  ...state,
  isLoading: false,
  isLoggedIn: false,
  currentUser: null
}))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
