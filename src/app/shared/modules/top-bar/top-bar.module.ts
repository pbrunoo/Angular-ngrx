import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ TopBarComponent ],
  exports: [ TopBarComponent ]
})

export class TopBarModule{}
