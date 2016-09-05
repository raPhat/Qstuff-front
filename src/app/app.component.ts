import { ViewContainerRef, ViewEncapsulation, Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'app works!';

    constructor(public viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
