import { CurrentUserInterface } from './../../../shared/types/current-user.interface';
import { props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { createAction } from '@ngrx/store';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(ActionTypes.GET_CURRENT_USER_SUCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);
