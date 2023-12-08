import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.html',
  styleUrls: ['./backend-error-messages.scss']
})

export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorInterface;

  public errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
