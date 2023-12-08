import { BackendErrorMessagesComponent } from 'src/app/shared/modules/backend-error-messages/components/backend-error-messages/backend-error-messages.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [ BackendErrorMessagesComponent ],
  exports: [BackendErrorMessagesComponent]
})

export class BackendErrorMessagesModule {

}
