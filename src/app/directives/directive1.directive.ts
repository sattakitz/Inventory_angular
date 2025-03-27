import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDirective1]'
}
)

export class Directive1Directive {
    constructor(private el: ElementRef) {
        // console.log("Directive 1", el.nativeElement);
        const elem = el.nativeElement as HTMLElement;
        // elem.onmouseover = () => {
        //     console.log("Mouse Over");
        //     elem.style.color = "red";
        // }
        // elem.onmouseout = () => {
        //     console.log("Mouse out");
        //     elem.style.color = "black";
        // }
    }

    @HostBinding('style.color') color: string = "black";

    @HostListener('mouseover')
    onMouseOver() {
        console.log("Mouse Over");
        this.color = 'red';
        // this.el.nativeElement.style.color = "red";
    }

    @HostListener('mouseout')
    onMouseOut() {
        console.log("Mouse Out");
        this.color = 'black';
        // this.el.nativeElement.style.color = "black";
    }
}