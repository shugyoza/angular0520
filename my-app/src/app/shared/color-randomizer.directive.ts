import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appColorRandomizer]',

})
// should be registered in app module's declarations
// this is attribute directive, so when applying it on an html element
// no need for *ColorRandomizerDirective
export class ColorRandomizerDirective implements OnInit {
    // @HostListener('mousemove')

    changeColor() {
        this.generateColor();
    }

    constructor( private el: ElementRef ) { }

    ngOnInit(): void {
    }

    generateColor() {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
         // this.el.nativeElement.style['color'] = "red";
         this.el.nativeElement.style['color'] = "rgb(" + r + "," + g + "," + b + ")"
    }
}
