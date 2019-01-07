import {Component} from "@angular/core";
import {TabComponent} from "./tab.component";

@Component({
  template: `
        <tab heading="Guideline categories" [removable]="true"
        (removed)="onRemove()"
        (select)="onSelect()"
        [active]="active"
        [hidden]="!active">      
            <categorised-guideline>
          </categorised-guideline>
        </tab>`
})
export class GuidelineSelectCategoriesTab extends TabComponent {}
