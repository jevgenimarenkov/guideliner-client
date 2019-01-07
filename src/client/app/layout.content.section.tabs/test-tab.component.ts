import {Component} from "@angular/core";
import {TabComponent} from "./tab.component";

@Component({
  selector: 'test-tab',
  template: `
        <tab heading="Component" [removable]='true'
        (removed)='onRemove()'
        (select)='onSelect()'
        [active]='active'
        [hidden]='!active'>
        <div class="panel">
  <div class="panel-body">
  Ha hah h
  </div>
  </div>
        </tab>`
})
export class TestTabComponent extends TabComponent {

}
