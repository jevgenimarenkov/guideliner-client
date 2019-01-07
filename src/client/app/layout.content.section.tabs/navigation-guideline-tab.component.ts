import {Component} from "@angular/core";
import {TabComponent} from "./tab.component";

@Component({
  selector: 'test-tab',
  template: `
        <tab heading="Usability guidelines22" [removable]="true"
        (removed)="onRemove()"
        (select)="onSelect()"
        [active]="active"
        [hidden]="!active">      
            <guideline-view></guideline-view>
        </tab>`
})
export class NavigationGuidelineTab extends TabComponent {

}
