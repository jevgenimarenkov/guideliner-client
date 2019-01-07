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
  selector: 'evaluation-result-item',
  templateUrl: 'evaluation-result-item.component.html',
  providers: [],
  pipes: []
})
export class EvaluationResultItemComponent implements OnInit {

  @Input()
  result: EvaluationResult;

  @ViewChild('childModal') public childModal:ModalDirective;

  constructor(private http:Http, private componentsHelper: ComponentsHelper, private vcr: ViewContainerRef, private usabilityService:UsabilityService) {
    componentsHelper.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {

  }

  public showChildModal(result : EvaluationResult):void {
    console.log(result);
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
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
}
