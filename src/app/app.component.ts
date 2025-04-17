import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { delay, of } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
})
export class AppComponent {
    title = 'inventory';

    newArrays = [1, '2', 3, '4', 5, '6', 7, '8', 9, '10'];
    newObjectArrays = [
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' },
        { id: 4, name: 'four' },
        { id: 5, name: 'five' },
        { id: 6, name: 'six' },
        { id: 7, name: 'seven' },
        { id: 8, name: 'eight' },
        { id: 9, name: 'nine' },
        { id: 10, name: 'ten' },
    ];

    object = {
        a: 1,
        b: 2,
        c: 3,
    };
    object2 = {
        c: 4,
        d: 5,
        e: 6,
        f: 7,
    };

    form = new FormGroup({
        name: new FormControl('name val'),
        email: new FormControl('email val'),
        password: new FormControl('pass val'),
    });

    constructor() {
        // let str: any = 'hello';
        // let num: any = 123;
        // let bool: any = true;
        // let n: any = null;
        // let u: any = undefined;
        // let array: any = [];
        // let object: any = {};

        // setTimeout(() => {
        //   console.log(`1`, str + str);
        //   console.log(`2`, str + num);
        //   console.log(`3`, num + num);
        // }, 0);

        // requestAnimationFrame(() => {
        //   console.log(`4`, str + str);
        //   console.log(`5`, str + num);
        //   console.log(`6`, num + num);
        // });

        // of('as').pipe(delay(1000)).subscribe({
        //   next: res => {
        //     console.log(`🏹 ~ res:`, res);
        //   }
        // });

        // console.log(`🏹 ~ newArrays2:`, this.newArrays);

        const mapArrays = this.newArrays.concat(this.newArrays);
        // console.log(`🏹 ~ mapArrays:`, mapArrays);

        // const newObject = { ...this.object, ...this.object2 };
        // console.log(`🏹 ~ newObject:`, newObject);
        const newObject2 = Object.assign({}, this.object, this.object2);
        // console.log(`🏹 ~ newObject2:`, newObject2);

        // console.log(`🏹 ~ this.form.getRawValue():`, this.form.getRawValue());
        const { name, email, password } = this.form.getRawValue();
        // console.log(`🏹 ~ name:`, name);
        // console.log(`🏹 ~ email:`, email);
        // console.log(`🏹 ~ password:`, password);

        const { a } = { a: 0 };
        // console.log(`🏹 ~ a:`, a);

        // const d = this.object2.d;
        // const e = this.object2.e;
        // const f = this.object2.f;
        const { d, e, f } = this.object2;
        // console.log(`🏹 ~ d:`, d);
        // console.log(`🏹 ~ e:`, e);
        // console.log(`🏹 ~ f:`, f);

        let value: any = 1;
        let value2: any = '1';
        let value3: any = [];
        let value4: any = {
            // a: 1,
            // b: 2,
            // c: 3,
        };
        // console.log(value == value2);
        // console.log(value === value2);
        // console.log(value3.length);
        // console.log(`🏹 ~ Object.entries(value3):`, Object.entries(value4));
        // for (const [key, value] of Object.entries(value4)) {
        //     console.log(`🏹 ~ key, value:`, key, value);
        // }
        // console.log(Object.entries(value4).length);
    }
}
