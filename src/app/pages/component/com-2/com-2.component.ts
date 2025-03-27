import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, output } from '@angular/core';

@Component({
    selector: 'app-com2',
    templateUrl: './com-2.component.html',
    styleUrls: ['./com-2.component.css']
})
export class Com2Component implements OnInit {

    @Output('onClose') onClose = new EventEmitter<boolean>();
    @Output('onMessage') onMessage = new EventEmitter<string>();
    @ViewChild('input') inputElementRef!: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    // ส่งข้อมูลออกไปยัง Output
    onSendData($event?: any) {
        if (event) {
            event.preventDefault(); // Prevent form submission
        }
        const input = this.inputElementRef.nativeElement;
        if (input.value.trim() != '') {
            this.onMessage.emit(input.value);
            input.value = '';
        }
        else alert('Please input data.');
    }
}
