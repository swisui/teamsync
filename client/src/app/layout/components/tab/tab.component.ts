import { Component } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    activeIndex: number;
    scrollableTabs: Array<{ title: string; content: string }>;

    constructor() {
        this.activeIndex = 1;
        this.scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: `Title ${i}`, content: `Content ${i}` }));
    }
}
