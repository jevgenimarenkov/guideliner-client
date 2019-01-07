import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {AccordionModule} from 'ng2-bootstrap/components/accordion';
import {ModalModule} from 'ng2-bootstrap/components/modal';
import {GuidelineStaticEvaluationResultComponent} from "./static-evaluation-results.component";
import {ProgressbarModule} from "ng2-bootstrap/components/progressbar";

@NgModule({
  imports: [CommonModule, SharedModule, AccordionModule, ModalModule, ProgressbarModule],
  declarations: [GuidelineStaticEvaluationResultComponent],
  exports: [GuidelineStaticEvaluationResultComponent],
  providers: []
})
export class GuidelineStaticEvaluationResultModule { }
