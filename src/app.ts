import {Observable} from 'rxjs/Observable';

export {mergeMap} from './mergeMap'

import * as $ from 'jquery';

declare var window: any;

const WEBPACK_LIB = 'AS';

$(function () {
    console.log("ready!");

    $('li').on('click', function () {
        const obs: Observable<any> = window[WEBPACK_LIB][$(this).text()]();
        print(obs);
    });
});

function print(obs: Observable<any>) {
    obs.subscribe(x =>
        $('#output').append(`<p>${x}</p>`));
}