import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap/components/modal/modal.component";
import {EvaluationResult} from "../../guideline.view/guideline";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import { ViewContainerRef } from '@angular/core';
import { ComponentsHelper } from 'ng2-bootstrap/components/utils/components-helper.service';
import {UsabilityService} from "../shared/usability.service";
import {CategoryEvaluation} from "../../shared/evaluation.dto";

@Component({
  moduleId: module.id,
  selector: 'guideline-evaluate',
  templateUrl: 'evaluate.component.html',
  providers: [],
  pipes: []
})
export class GuidelineEvaluateComponent implements OnInit {

  public results:Array<EvaluationResult> = new Array<EvaluationResult>();

  public loading: boolean = true;

  @Input() category:CategoryEvaluation;

  public summary:any[] = [];

  constructor(private http:Http, private componentsHelper: ComponentsHelper, private vcr: ViewContainerRef, private usabilityService:UsabilityService) {
    componentsHelper.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    this.get().subscribe(results => {
      this.results = results;
      this.loading = false;
      this.summary = this.calculateSummary(this.results);
    })
  }

  get():Observable<any> {
    return this.usabilityService.evaluateByCategory(this.category.category, this.category.url);
  }

  private calculateSummary(results: Array<EvaluationResult>) : any[] {
    let amountOfFailed : number = 0
    let amountOfSuccess : number = 0;
    amountOfFailed = results.filter(res => res.result == "FAIL").length;
    amountOfSuccess = results.filter(res => res.result == "SUCCESS").length;

    this.summary = [];
    this.summary.push({
      value: 100*amountOfFailed/(amountOfFailed + amountOfSuccess),
      type: 'danger'
    });

    this.summary.push({
      value: 100*amountOfSuccess/(amountOfFailed + amountOfSuccess),
      type: 'success'
    });

    return this.summary;
  }

}
