import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {
    transform(value: any, limit: number = 50): any {
        // Implement your transformation logic here
        return this.onCuttext(value, limit);
    }

    // ! สร้าง function cuttext
    private onCuttext(text: string, limit: number) {
        return text.length > limit ? text.substr(0, limit) + '...' : text;
    }
}