import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { isSumittingSelector, ValidationErrorsSelector } from 'src/app/auth/store/actions/selectors';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/auth/types/app-state.interface';
import { registerAction } from 'src/app/auth/store/register.actions';
import { RegisterRequestInterface } from 'src/app/shared/types/register-request.interface';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      username: ['', [Validators.required, Validators.min(4)]],
      email: ['', [Validators.required, Validators.min(4)]],
      password: ['', [Validators.required, Validators.min(4)]]
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}))
  }
}
