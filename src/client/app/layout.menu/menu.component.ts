import { Component } from '@angular/core';
import {EnvConfig} from "../shared/config/env.config";
import {SectionService} from "../layout.content.section/section.service";


@Component({
  moduleId: module.id,
  selector: 'guideline-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class MenuComponent {

  constructor (
    private sectionService:SectionService
  ) {}

  addName() {
    this.sectionService.leftSection.openNavigationGuidelineTab("dd");
  }

}
