import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {SectionService} from "../../layout.content.section/section.service";
import {Guideline} from "../../guideline.view/guideline";
import {CategoryEvaluation} from "../../shared/evaluation.dto";
import {UsabilityService} from "../shared/usability.service";


@Component({
  moduleId: module.id,
  selector: 'categorised-guideline',
  templateUrl: 'categorised-guideline.component.html'
})
export class CategorisedGuidelinesComponent implements OnInit {

  public categories:Array<String> = new Array<String>();

  public guidelines:Array<Guideline> = [];

  public selectedCategory:string = '';

  public webURL : String = "http://www.etis.ee";

  constructor(private http:Http, private sectionService:SectionService, private usabilityService:UsabilityService) {

  }

  ngOnInit(): void {
    this.usabilityService.getUsabilityCategory().subscribe(c => {
      this.categories = c;
      this.showCategories(c[0]);
    })
  }

  showCategories(category):void {
    this.selectedCategory = category;

    this.usabilityService.getUsabilityGuidelinesByCategory(category).subscribe(guidelines => {
      this.guidelines = guidelines;
    });
  }

  performEvaluation():void {
    let categoryEvaluation : CategoryEvaluation = new CategoryEvaluation();
    categoryEvaluation.category = this.selectedCategory;
    categoryEvaluation.url = this.webURL;
    this.sectionService.leftSection.openGuidelineAutoEvaluationResultsTab(categoryEvaluation);
  }

}
