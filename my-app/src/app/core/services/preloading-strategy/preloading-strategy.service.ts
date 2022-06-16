// Ref.: https://www.tektutorialshub.com/angular/angular-preloading-strategy/
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { flatMap, mergeMap } from 'rxjs/operators';

import { PreloadingStrategy, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, loadMe: () => Observable<any>): Observable<any> {

    if (route.data && route.data['preload']) {
      let delay: number = route.data['delay']
      console.log('preload called on', route.path, `with `, delay, 'ms. delay');
      return timer(delay).pipe(
        flatMap(_ => {
          console.log('Loading now ', route.path);
          return loadMe();
        }));
      } else {
        console.log('no preload for the path ', route.path);
        return of(null);
      }
  }

  constructor() { }

}
