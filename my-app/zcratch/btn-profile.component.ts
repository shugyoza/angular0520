import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'btn-profile',
    template: '<button>{{text}}</button>',
    styles: []
})
export class ButtonProfileComponent implements OnInit {

    @Input() path = '';
    @Input() text = '';

    ngOnInit(): void {
    }
}
