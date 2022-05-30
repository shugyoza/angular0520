import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstTenLetter'
})
export class FirstTenLetterPipe implements PipeTransform {
    transform(value: string): string {
        if (value.length <= 10) {
            return value;
        }
        return value.substring(0, 10)
    }
}
