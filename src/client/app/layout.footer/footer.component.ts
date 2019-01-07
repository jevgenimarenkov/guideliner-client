import { Component } from '@angular/core';
import {EnvConfig} from "../shared/config/env.config";


@Component({
  moduleId: module.id,
  selector: 'guideline-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class FooterComponent {

  public environment:string = 'TODO change';

}
