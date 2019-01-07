import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {SectionComponent} from "../layout.content.section/section.component";
import {SectionService} from "../layout.content.section/section.service";

@Component({
  moduleId: module.id,
  selector: 'guideline-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class ContentComponent {

  @ViewChild('leftSection')
  public leftSection: SectionComponent;

  @ViewChild('rightSection')
  public rightSection: SectionComponent;

  constructor (
    private sectionService:SectionService
  ) {}

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    this.sectionService.leftSection = this.leftSection;
    this.sectionService.rightSection = this.rightSection;

    setTimeout(() => {
      // this.sectionService.leftSection.openNavigationGuidelineTab("ddd");
      // this.sectionService.leftSection.openGuidelineEvaluationResultsTab("222");
    //  this.sectionService.leftSection.openCreateGuidelineTab("222");
      this.sectionService.leftSection.openGuidelineSelectCategoriesTab("1");
    }, 1);
  }
}
