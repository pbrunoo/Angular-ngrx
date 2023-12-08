import { AuthStateInterface } from 'src/app/auth/types/auth-state.interface';
import { AppStateInterface } from 'src/app/auth/types/app-state.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

export const isSumittingSelector =  createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const ValidationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationError
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);
