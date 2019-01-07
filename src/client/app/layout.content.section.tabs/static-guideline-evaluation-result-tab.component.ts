import {Component} from "@angular/core";
import {TabComponent} from "./tab.component";

@Component({
  template: `
        <tab heading="Existing Evaluation results" [removable]="true"
        (removed)="onRemove()"
        (select)="onSelect()"
        [active]="active"
        [hidden]="!active">      
            <static-evaluation-results></static-evaluation-results>
        </tab>`,
})
export class GuidelineEvaluationResultsTab extends TabComponent {}
