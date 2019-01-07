import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {SectionService} from "../layout.content.section/section.service";
import {Guideline} from "../guideline.view/guideline";
import {CategoryEvaluation} from "../shared/evaluation.dto";

@Component({
  moduleId: module.id,
  selector: 'guideline-categories',
  templateUrl: 'select-categories.component.html'
})
export class SelectCategoriesComponent implements OnInit {

  public categories:Array<String> = new Array<String>();

  public guidelines:Array<Guideline> = [];

  public selectedCategory:string = '';

  public webURL : String = "http://www.etis.ee";

  constructor(private http:Http, private sectionService:SectionService) {

  }

  ngOnInit(): void {
    this.retrieveGuidelineCategoreis().subscribe(c => {
      this.categories = c;
      this.showCategories(c[0]);
    })

  }

  retrieveGuidelineCategoreis():Observable<any> {
    let url:string = `http://localhost:8080/usability/categories`;
    return this.http.get(url).map(resp => resp.json());
  }

  showCategories(category):void {
    this.selectedCategory = category;
    console.log(category);

    this.get(category).subscribe(guidelines => {
      this.guidelines = guidelines;
    });
  }

  performEvaluation():void {
    let categoryEvaluation : CategoryEvaluation = new CategoryEvaluation();
    categoryEvaluation.category = this.selectedCategory;
    categoryEvaluation.url = this.webURL;

    this.sectionService.leftSection.openGuidelineAutoEvaluationResultsTab(categoryEvaluation);
  }

  get(category : String):Observable<any> {
    let url:string = `http://localhost:8080/usability/categories/` + category;
    return this.http.get(url).map(resp => resp.json());
  }

}
