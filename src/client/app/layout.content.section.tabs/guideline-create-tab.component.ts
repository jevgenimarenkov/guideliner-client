import {Component} from "@angular/core";
import {TabComponent} from "./tab.component";

@Component({
  template: `
        <tab heading="Create new guideline" [removable]="true"
        (removed)="onRemove()"
        (select)="onSelect()"
        [active]="active"
        [hidden]="!active">      
            <create-guideline></create-guideline>
        </tab>`,
})
export class CreateGuidelineTab  extends TabComponent {}
