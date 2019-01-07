import {
  Component,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import {SectionService} from './section.service';
import {TestTabComponent} from "../layout.content.section.tabs/test-tab.component";
import {TabComponent} from "../layout.content.section.tabs/tab.component";
import {NavigationGuidelineTab} from "../layout.content.section.tabs/navigation-guideline-tab.component";
import {GuidelineEvaluationResultsTab} from "../layout.content.section.tabs/static-guideline-evaluation-result-tab.component";
import {GuidelineEvaluateTab} from "../layout.content.section.tabs/guideline-evaluate-tab.component";
import {CreateGuidelineTab} from "../layout.content.section.tabs/guideline-create-tab.component";
import {GuidelineSelectCategoriesTab} from "../layout.content.section.tabs/guideline-select-categories-tab.component";
import {CategoryEvaluation} from "../shared/evaluation.dto";

@Component({
  moduleId: module.id,
  selector: 'kn-section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css']
})
export class SectionComponent {

  public isExpanded:boolean = false;
  @ViewChild('tabsContainer', {read: ViewContainerRef}) tabsContainer:ViewContainerRef;
  private tabs = new Array();

  constructor(private sectionService:SectionService,
              private componentResolver:ComponentFactoryResolver) {
  }

  public closeTab(tabType:any) {
    var tab = this.tabs[tabType];
    if (tab) {
      tab.active = false;
      //tab.ref.destroy();
      this.tabs[tabType] = undefined;
    }
  }

  public closeAllTabs() {
    for (var tabType in this.tabs) {
      this.closeTab(tabType);
    }
  }

  public openTab(tabType:any, tabModel?:any) {
    if (!this.isExpanded) {
      this.sectionService.showBothSections();
    }
    if (!this.tabs[tabType]) {
      this.createTab(tabType, tabModel);
    } else {
      this.selectTab(tabType, tabModel);
    }
  }

  public selectTab(tabType:any, tabModel?:any) {
    var tab = this.tabs[tabType];
    tab.model = tabModel;

    // Select required tab
    if (!tab.active) {
      tab.active = true;
    }

    // Deselect another tabs
    for (var key in this.tabs) {
      var tab = this.tabs[key];
      if (tabType != key && tab) {
        tab.active = false;
      }
    }
  }

  private createTab(tabType:any, tabModel?:any) {
    let factory = this.componentResolver.resolveComponentFactory(tabType);
    let componentRef = this.tabsContainer.createComponent(factory);
    let tab:TabComponent = <TabComponent>componentRef.instance;
    tab.ref = componentRef;
    tab.tabType = tabType;
    tab.section = this;
    tab.model = tabModel;

    this.tabs[tabType] = tab;
    this.selectTab(tabType, tabModel);
  }

  // public openNavigationGuidelineTab(cid:String) {
  //   this.openTab(NavigationGuidelineTab, cid);
  // }

  // public openGuidelineEvaluationResultsTab(cid:String) {
  //   this.openTab(GuidelineEvaluationResultsTab, cid);
  // }

  public openGuidelineAutoEvaluationResultsTab(categoryEvaluation: CategoryEvaluation) {
    this.openTab(GuidelineEvaluateTab, categoryEvaluation);
  }

  public openCreateGuidelineTab(s: string) {
    this.openTab(CreateGuidelineTab, s);
  }

  public openGuidelineSelectCategoriesTab(s: string) {
    this.openTab(GuidelineSelectCategoriesTab, s);
  }
}
