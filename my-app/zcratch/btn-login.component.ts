import { Component, Input } from '@angular/core';

@Component({
    selector: 'btn-login',
    template: '<button>{{text}}</button>',
    styles: []
})
export class ButtonLoginComponent {

    @Input() text!: string;
}

// use in parent.component.html:
// // <btn-login [text]="btnText"></btn-login>
// // where btn text is variable in the parent.component.ts class
