import { PersistanceService } from './../../../shared/services/persistance.service';
import { registerSuccessAction, registerFailureAction } from 'src/app/auth/store/register.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { registerAction } from 'src/app/auth/store/register.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(()=> this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({currentUser});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({errors: errorResponse.error.errors}));
          })
        )
      })
  ));

  redirectAfterSubmit$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/');
      })
    ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {dispatch: false}
}
