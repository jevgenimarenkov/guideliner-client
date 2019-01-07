import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {AccordionModule} from 'ng2-bootstrap/components/accordion';
import {ModalModule} from 'ng2-bootstrap/components/modal';
import {SelectCategoriesComponent} from "./select-categories.component";
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
import { ButtonsModule } from 'ng2-bootstrap/components/buttons';

@NgModule({
  imports: [CommonModule, SharedModule, AccordionModule, ModalModule, DropdownModule, ButtonsModule],
  declarations: [SelectCategoriesComponent],
  exports: [SelectCategoriesComponent],
  providers: []
})
export class SelectCategoriesModule { }
