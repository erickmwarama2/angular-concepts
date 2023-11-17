import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    template: '<h1> {{ title }} </h1><p>The minimum is {{getMin(8, 30)}}',
    styles: [``]
})
export class HelloWorldComponent implements OnInit, OnDestroy {
    intervalSub: any;
    ctr = 0;
    title = 'Hello World! New component by Erick';

    ngOnInit(): void {
        this.intervalSub = setInterval(() => {
            this.title = `Counter incremented: ${this.ctr++}`;
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalSub);
    }

    getMin(a: number, b: number) {
        if (a < b) {
            return a;
        }

        return b;
    }
}