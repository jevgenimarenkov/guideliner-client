import {Component} from "@angular/core";
import {TabComponent} from "./tab.component";

@Component({
  template: `
        <tab heading="Automatic Evaluation results" [removable]="true"
        (removed)="onRemove()"
        (select)="onSelect()"
        [active]="active"
        [hidden]="!active">      
            <guideline-evaluate
            [category] = 'model'>
          </guideline-evaluate>
        </tab>`
})
export class GuidelineEvaluateTab extends TabComponent {}
