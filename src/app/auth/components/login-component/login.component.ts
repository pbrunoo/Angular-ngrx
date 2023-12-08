import { loginAction } from './../../store/actions/login-action';
import { LoginRequestInterface } from './../../../shared/types/login-request.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { Observable } from 'rxjs';
import { isSumittingSelector, ValidationErrorsSelector } from 'src/app/auth/store/actions/selectors';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/auth/types/app-state.interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.initializeform();
    this.inicializeValues();
  }

  inicializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSumittingSelector));
    this.backendErrors$ = this.store.pipe(select(ValidationErrorsSelector))
  }

  initializeform(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.min(4)]],
      password: ['', [Validators.required, Validators.min(4)]]
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}))
  }
}
