import { Component } from '@angular/core';
import NavbarComponent from '../../layouts/navbar/navbar.component';
import { Component2Component } from '../../components/component2/component2.component';
import { Component1Component } from '../../components/component1/component1.component';
import { IForm } from '../../interfaces/form.interface';

@Component({
    imports: [NavbarComponent, Component2Component, Component1Component],
    templateUrl: './form-basic.component.html',
    styleUrl: './form-basic.component.css',
})
export class FormBasicComponent {
    isShowWorkshop: boolean = true;
    formData: IForm | any;
}
