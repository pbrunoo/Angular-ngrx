import { getCurrentUserAction } from 'src/app/auth/store/actions/get-current-user.action';
import { Store } from '@ngrx/store';
import {Component, OnInit} from '@angular/core'

@Component({
  selector: ' app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
