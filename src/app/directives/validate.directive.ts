import { AbstractControl } from '@angular/forms';
import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[appValidate]',
})
export class ValidateDirective implements OnChanges {
    constructor() {}

    errorMessage = {
        required: 'The field is required.',
        pattern: 'The field is not match "{0}"',
    };

    @Input('appValidate') control!: AbstractControl;
    @HostBinding('class') class: string = 'invalid-feedback';
    @HostBinding('innerText') text!: string;

    ngOnChanges() {
        if (!this.control) return;
        // Get Error message default
        this.text = this.getErrorMessage() || '';
        // Get Realtime Error message
        this.control.valueChanges.subscribe(() => {
            this.text = this.getErrorMessage() || '';
        });
    }

    // แสดงข้อมูล Error message จาก FormControl
    private getErrorMessage() {
        const control = this.control;
        if (control && control.invalid) {
            const errorKey = control.errors
                ? Object.keys(control.errors)[0]
                : null;
            let errorMessage = errorKey
                ? this.errorMessage[errorKey as keyof typeof this.errorMessage]
                : '';
            switch (errorKey) {
                case 'pattern':
                    errorMessage = this.errorMessage[errorKey].replace(
                        '{0}',
                        control.errors?.['pattern']?.requiredPattern || ''
                    );
                    break;
                case 'message':
                    errorMessage = control.errors?.[errorKey] || '';
                    break;
            }
            return errorMessage;
        }
        return ''; // Ensure a default value is returned if no errors are found
    }
}
