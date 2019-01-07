import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {SectionModule} from "../layout.content.section/section.module";
import {GuidelineViewComponent} from "./view.component";
import {AccordionModule} from 'ng2-bootstrap/components/accordion';
import {ModalModule} from 'ng2-bootstrap/components/modal';

@NgModule({
  imports: [CommonModule, SharedModule, AccordionModule, ModalModule],
  declarations: [GuidelineViewComponent],
  exports: [GuidelineViewComponent],
  providers: []
})
export class GuidelineViewModule { }
