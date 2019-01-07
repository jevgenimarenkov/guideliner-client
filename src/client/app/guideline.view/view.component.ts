import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {Guideline} from "./guideline";
import {SectionService} from "../layout.content.section/section.service";

@Component({
  moduleId: module.id,
  selector: 'guideline-view',
  templateUrl: 'view.component.html'
})
export class GuidelineViewComponent implements OnInit {

  public guidelines:Array<Guideline> = new Array<Guideline>();

  public webURL : String = "http://www.etis.ee";

  constructor(private http:Http, private sectionService:SectionService) {
  }

  ngOnInit(): void {
    this.get().subscribe(guidelines => {
      this.guidelines = guidelines;
    })
  }

  get():Observable<any> {
    let url:string = `http://localhost:8080/retrieve`;
    return this.http.get(url).map(resp => resp.json());
  }

  performEvaluation():void {
    console.log("perform evaluation"+ this.webURL);
    this.sectionService.leftSection.openGuidelineAutoEvaluationResultsTab(this.webURL);
  }

}
