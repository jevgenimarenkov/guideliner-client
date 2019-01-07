import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionComponent} from "./section.component";
import {SectionService} from "./section.service";
import {ReactiveFormsModule} from "@angular/forms";
import { TabsModule } from 'ng2-bootstrap/components/tabs';
import {TestTabComponent} from "../layout.content.section.tabs/test-tab.component";
import {NavigationGuidelineTab} from "../layout.content.section.tabs/navigation-guideline-tab.component";
import {GuidelineViewModule} from "../guideline.view/view.module";
import {GuidelineEvaluationResultsTab} from "../layout.content.section.tabs/static-guideline-evaluation-result-tab.component";
import {GuidelineStaticEvaluationResultModule} from "../guideline.static-evaluation-results/static-evaluation-results.module";
import {GuidelineEvaluateTab} from "../layout.content.section.tabs/guideline-evaluate-tab.component";
import {CreateGuidelineTab} from "../layout.content.section.tabs/guideline-create-tab.component";
import {GuidelineSelectCategoriesTab} from "../layout.content.section.tabs/guideline-select-categories-tab.component";
import {GuidelineModule} from "../guideline/guideline.module";
import {CategorisedGuidelinesComponent} from "../guideline/categorised-guideline/categorised-guideline.component";

@NgModule({
  imports: [CommonModule, TabsModule, ReactiveFormsModule, GuidelineViewModule, GuidelineStaticEvaluationResultModule, GuidelineModule],
  declarations: [SectionComponent, TestTabComponent, NavigationGuidelineTab, GuidelineEvaluationResultsTab, GuidelineEvaluateTab, CreateGuidelineTab, GuidelineSelectCategoriesTab],
  entryComponents: [TestTabComponent, NavigationGuidelineTab, GuidelineEvaluationResultsTab, GuidelineEvaluateTab, CreateGuidelineTab, GuidelineSelectCategoriesTab],
  exports: [SectionComponent]
})
export class SectionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SectionModule,
      providers: [SectionService]
    };
  }
}
