import { PersistanceService } from './../../../shared/services/persistance.service';
import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from 'src/app/auth/store/actions/get-current-user.action';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(()=> this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');

        if(!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser});
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        )
      })
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
