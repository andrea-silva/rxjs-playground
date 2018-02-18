import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'


export function mergeMap() {
    return Observable.of('a', 'b', 'c')
        .mergeMap(x =>
                Observable.interval(1000).map(i => x + i).take(4),
            (x,y, i, j) => {
                console.log(`second function: ${x} ${y} ${i} ${j}`);
                return y;
            },
            2
        );
}