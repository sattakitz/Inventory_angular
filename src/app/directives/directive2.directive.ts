import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive implements OnChanges {

  @Input('appDirective2') appDirective2: number | string | undefined;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
    // this.container.createEmbeddedView(this.template);
  }

  ngOnChanges(): void {
    if (typeof this.appDirective2 === 'number' && (this.appDirective2 % 2) == 0) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.remove();
    }
  }

}
