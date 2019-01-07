import {Component, OnInit, ViewChild} from '@angular/core';
import {EvaluationResult} from "../guideline.view/guideline";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {ModalDirective} from "ng2-bootstrap/components/modal/modal.component";
import { ViewContainerRef } from '@angular/core';
import { ComponentsHelper } from 'ng2-bootstrap/components/utils/components-helper.service';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  moduleId: module.id,
  selector: 'static-evaluation-results',
  templateUrl: 'static-evaluation-results.component.html',
  providers: [],
  pipes: []
})
export class GuidelineStaticEvaluationResultComponent implements OnInit {

  public results:Array<EvaluationResult> = new Array<EvaluationResult>();

  @ViewChild('childModal') public childModal:ModalDirective;

  public activeResult:EvaluationResult = new EvaluationResult();

  public summary:any[] = [];

  constructor(private http:Http, private componentsHelper: ComponentsHelper, private vcr: ViewContainerRef) {
    componentsHelper.setRootViewContainerRef(vcr);
  }

  public showChildModal(result : EvaluationResult):void {
    console.log(result);
    this.activeResult = result;
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  // ngOnInit(): void {
  //  for (var i = 0; i < 2; i++) {
  //     let guideline:EvaluationResult = new EvaluationResult();
  //     guideline.name = "7:2 Differentiate and Group Navigation Elements";
  //     guideline.description = "Clearly differentiate navigation elements from one another, but group and place them in a consistent and easy to find place on each page.";
  //     this.results.push(guideline);
  //  }
  // }

  ngOnInit(): void {
    this.get().subscribe(results => {
      this.results = results;
      this.summary = this.calculateSummary(this.results);
    })
    // for (var i = 0; i < 2; i++) {
    //    let guideline:Guideline = new Guideline();
    //    guideline.name = "7:2 Differentiate and Group Navigation Elements";
    //    guideline.description = "Clearly differentiate navigation elements from one another, but group and place them in a consistent and easy to find place on each page.";
    //    this.guidelines.push(guideline);
    // }
  }

  get():Observable<any> {
    let url:string = `http://localhost:8080/results`;
    return this.http.get(url).map(resp => resp.json());
  }

  getClassForPanel(result : String):String {
    let clazz:String = "success";
    if (result == "FAIL") clazz = "danger";
    return "panel panel-" + clazz;
  }

  getClassForLabel(result : String):String {
    let clazz:String = "success";
    if (result == "FAIL") clazz = "danger";
    return "label label-" + clazz;
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
