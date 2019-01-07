import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {FooterComponent} from "./footer.component";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
  providers: []
})
export class FooterModule { }
