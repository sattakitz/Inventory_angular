import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-component2',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './component2.component.html',
    styleUrl: './component2.component.css',
})
export class Component2Component {
    constructor(private builder: FormBuilder) {
        this.createFormData();
    }

    @Output('onSubmitChange') onSubmitChange = new EventEmitter();

    /** สำหรับเก็บค่าฟอร์ม */
    form: FormGroup | any;

    /** เพิ่มเบอร์โทรใหม่ */
    onAddPhone() {
        const phoneArray = this.getPhonesForm;
        phoneArray.push(this.createPhoneControl());
    }

    /** ลบเบอร์โทร */
    onRemovePhone() {
        const phoneArray = this.getPhonesForm;
        if (phoneArray.length <= 1) return;
        phoneArray.removeAt(phoneArray.length - 1);
    }

    /** บันทึกข้อมูล */
    onSubmit() {
        this.form.get('sex').markAsTouched();
        this.form.get('firstname').markAsTouched();
        this.form.get('lastname').markAsTouched();
        this.getPhonesForm.controls.forEach((control) =>
            control.markAsTouched()
        );

        if (this.form.invalid) return;
        this.onSubmitChange.emit(this.form.value);
    }

    /** ดึงข้อมูลเบอร์โทรที่อยู่ใน FormArray */
    get getPhonesForm() {
        const formArray = this.form.get('phones') as FormArray<FormControl>;
        return formArray;
        // return this.form.get('phones') as FormArray<FormControl>;
    }

    /** สร้างฟอร์ม */
    private createFormData() {
        this.form = this.builder.group({
            sex: [null, [Validators.required]],
            firstname: [null, [Validators.required]],
            lastname: [null, [Validators.required]],
            phones: this.builder.array([this.createPhoneControl()]),
        });
    }

    /** สร้าง Phone Control Form */
    private createPhoneControl() {
        return this.builder.control(null, [
            // Validators.required,
            // Validators.pattern(/^[0-9]{10}$/),
        ]);
    }
}
