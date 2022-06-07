// Ref.: https://www.tektutorialshub.com/angular/angular-async-validator-example/
// Ref.: https://www.tektutorialshub.com/angular/custom-validator-with-parameters-in-angular/
// https://www.tektutorialshub.com/angular/how-to-add-validators-dynamically-using-setvalidators-in-angular/

import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { AuthenticationService } from './authentication.service';

export interface AsyncValidatorFn {
    (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
}

export function validateCredential(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log('control.value: ', control.value);

    if (true) return of({'validateCredential': true, 'requiredValue': 10});

    return of(null)
}
