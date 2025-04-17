import {
    Directive,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[appDirective2]',
})
export class Directive2Directive implements OnChanges {
    @Input('appDirective2') appDirective2: number | undefined;

    constructor(
        private template: TemplateRef<any>,
        private container: ViewContainerRef
    ) {
        this.container.createEmbeddedView(this.template);
    }

    ngOnChanges(): void {
        console.log('Directive2Directive', this.appDirective2);
    }
}
