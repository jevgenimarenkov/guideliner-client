import {SectionComponent} from "../layout.content.section/section.component";

export class TabComponent {

  public active:boolean = true;
  public section:SectionComponent;
  public tabType:TabComponent;
  public ref:any;

  // put here data to be shared with component
  public model:any;

  protected onSelect() {
    this.section.selectTab(this.tabType, this.model);
  }

  protected onRemove() {
    this.section.closeTab(this.tabType);
  }
}
