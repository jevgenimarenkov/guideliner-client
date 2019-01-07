import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap/components/modal/modal.component";
import {EvaluationResult, Guideline} from "../../guideline.view/guideline";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import { ViewContainerRef } from '@angular/core';
import { ComponentsHelper } from 'ng2-bootstrap/components/utils/components-helper.service';
import {UsabilityService} from "../shared/usability.service";
import {CategoryEvaluation} from "../../shared/evaluation.dto";

@Component({
  moduleId: module.id,
  selector: 'guideline-item',
  templateUrl: 'guideline-item.component.html',
  providers: [],
  pipes: []
})
export class GuidelineItemComponent implements OnInit {

  @Input()
  guideline: Guideline;

  constructor() {
  }

  ngOnInit(): void {
  }



}
