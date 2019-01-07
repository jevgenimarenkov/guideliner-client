import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {CreateGuidelineComponent} from "./create/create.component";
import {GuidelineEvaluateComponent} from "./evaluate/evaluate.component";
import {AccordionModule} from 'ng2-bootstrap/components/accordion';
import {ModalModule} from 'ng2-bootstrap/components/modal';
import {ProgressbarModule} from "ng2-bootstrap/components/progressbar";
import {LoadingIndicator} from "./evaluate/loading-indicator";
import {CategorisedGuidelinesComponent} from "./categorised-guideline/categorised-guideline.component";
import { ButtonsModule } from 'ng2-bootstrap/components/buttons';
import {GuidelineItemComponent} from "./guideline-item/guideline-item.component";
import {EvaluationResultItemComponent} from "./evaluation-result-item/evaluation-result-item.component";

@NgModule({
  imports: [CommonModule, SharedModule, CommonModule, SharedModule, AccordionModule, ModalModule, ProgressbarModule, ButtonsModule],
  declarations: [CreateGuidelineComponent, GuidelineEvaluateComponent, LoadingIndicator, CategorisedGuidelinesComponent, GuidelineItemComponent, EvaluationResultItemComponent],
  exports: [CreateGuidelineComponent, GuidelineEvaluateComponent, LoadingIndicator, CategorisedGuidelinesComponent],
  providers: []
})
export class GuidelineModule {}
