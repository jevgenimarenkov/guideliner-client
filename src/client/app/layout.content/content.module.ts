import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {ContentComponent} from "./content.component";
import {SectionModule} from "../layout.content.section/section.module";

@NgModule({
  imports: [CommonModule, SectionModule.forRoot(), SharedModule],
  declarations: [ContentComponent],
  exports: [ContentComponent],
  providers: []
})
export class ContentModule { }
