import {Injectable} from '@angular/core';
import {SectionComponent} from './section.component';

@Injectable()
export class SectionService {

    public leftSection: SectionComponent;
    public rightSection: SectionComponent;

    public expandLeftSection() {
        this.leftSection.isExpanded = true;
        this.rightSection.isExpanded = false;
    }

    public expandRightSection() {
        this.leftSection.isExpanded = false;
        this.rightSection.isExpanded = true;
    }

    public showBothSections() {
        this.leftSection.isExpanded = false;
        this.rightSection.isExpanded = false;
    }

    public closeAllTabs() {
        this.leftSection.closeAllTabs();
        this.rightSection.closeAllTabs();
    }
}
