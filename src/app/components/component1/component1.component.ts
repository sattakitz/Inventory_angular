import { Component, Input, OnChanges } from '@angular/core';
import { IForm } from '../../interfaces/form.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-component1',
    imports: [CommonModule],
    templateUrl: './component1.component.html',
    styleUrl: './component1.component.css',
})
export class Component1Component implements OnChanges {
    @Input('formData') formData: IForm | any;

    ngOnChanges() {
        console.log(this.formData);
    }
}
