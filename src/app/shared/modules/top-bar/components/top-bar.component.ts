import { isLoggedInSelector, isAnonymousSelector, currentUserSelector } from './../../../../auth/store/actions/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
