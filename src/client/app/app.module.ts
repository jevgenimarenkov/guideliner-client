import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import {FooterModule} from "./layout.footer/footer.module";
import {MenuModule} from "./layout.menu/menu.module";
import {ContentModule} from "./layout.content/content.module";
import {SectionService} from "./layout.content.section/section.service";
import {GuidelineViewModule} from "./guideline.view/view.module";
import {GuidelineStaticEvaluationResultModule} from "./guideline.static-evaluation-results/static-evaluation-results.module";
import {SelectCategoriesModule} from "./guideline.select-categories/select-categories.module";
import {UsabilityService} from "./guideline/shared/usability.service";
import {GuidelineModule} from "./guideline/guideline.module";

@NgModule({
  imports: [BrowserModule, HttpModule, FooterModule, MenuModule, ContentModule, GuidelineViewModule,
    GuidelineStaticEvaluationResultModule, GuidelineModule, SelectCategoriesModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    SectionService,
    UsabilityService],
  bootstrap: [AppComponent]

})
export class AppModule { }
