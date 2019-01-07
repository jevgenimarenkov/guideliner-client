import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {MenuComponent} from "./menu.component";
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';

@NgModule({
  imports: [CommonModule, SharedModule, DropdownModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: []
})
export class MenuModule { }
