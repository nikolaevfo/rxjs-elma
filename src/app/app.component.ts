import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { asapScheduler, asyncScheduler, AsyncSubject, BehaviorSubject, catchError, combineLatest, combineLatestWith, concatMap, debounceTime, distinctUntilChanged, EMPTY, exhaustMap, filter, from, fromEvent, interval, map, mergeAll, mergeMap, NEVER, Observable, observeOn, of, OperatorFunction, pipe, ReplaySubject, retry, scheduled, startWith, Subject, subscribeOn, Subscriber, switchMap, take, takeUntil, takeWhile, tap, throwError, timer, withLatestFrom, zip, zipWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'rxjs-elma';

    ngOnInit(): void {

        // Observable ==================================================================
        // const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
        //     console.log('START');

        //     let count = 0;

        //     const intervalId = setInterval(() => {
        //         count += 1;

        //         // console.log('INCREMENT', count);

        //         subscriber.next(count);

        //         // if (count === 5) {
        //         //     subscriber.complete(); // Observable dead
        //         //     // subscriber.error(new Error('overflow')); // Observable dead
        //         // }
        //     }, 1000);

        //     //     return () => { // Destroy function
        //     //         console.log('DESTROY');

        //     //         clearInterval(intervalId);
        //     //     }
        // });

        // sequence$.subscribe((count: number) => {
        //     console.log(count);
        // });

        // setTimeout(() => {
        //     sequence$.subscribe(count => {
        //         console.log(`timeout - ${count}`);
        //     });
        // }, 3000);


        // const subscription = sequence$.subscribe({
        //     next: count => {
        //         console.log(count);
        //     },
        //     error: error => {
        //         console.log(error);
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });

        // setTimeout(() => {
        //     console.log('subscription.closed', subscription.closed);
        //     subscription.unsubscribe();
        //     console.log('subscription.closed', subscription.closed);
        // }, 2000);


        // const allSubscription = new Subscription();
        // allSubscription.add(
        //     sequence$.subscribe({
        //         next: count => {
        //             console.log(count);
        //         },
        //         error: error => {
        //             console.log(error);
        //         },
        //         complete: () => {
        //             console.log('completed');
        //         },
        //     })
        // );
        // setTimeout(() => {
        //     console.log('subscription.closed', allSubscription.closed);
        //     allSubscription.unsubscribe();
        //     console.log('subscription.closed', allSubscription.closed);
        // }, 2000);



        // Шаблонные потоки rxjs ===========================================================

        // interval(2000).subscribe(console.log);


        // timer(0, 2000).subscribe(console.log);


        // of(1, 2, [3, 4], {count: 5}).subscribe({
        //     next: value => {
        //         console.log(value)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });


        // from({length: 5}).subscribe({
        //     next: value => {
        //         console.log(value)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });

        // from([1, 2, [3, 4], {count: 5}]).subscribe({
        //     next: value => {
        //         console.log(value)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });

        // from(fetch('https://api.kanye.rest')).subscribe({
        //     next: async res => {
        //         const json = await res.json();
        //         console.log(json.quote)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });


        // ajax({
        //     url: 'https://api.kanye.rest'
        // }).subscribe({
        //     next: res => {
        //         console.log((res.response as any).quote)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });




        // Операторы rxjs ========================================================================

        // const filterEven:(stream$: Observable<number>) => Observable<number> =
        //     filterStreamValue<number>(value => value % 2 === 0);

        // function filterStreamValue<T>(
        //     cb: (value: T) => boolean,
        // ): (stream$: Observable<T>) => Observable<T> {
        //     return (stream$: Observable<T>): Observable<T> => new Observable(subscriber => {
        //         const subscription = stream$.subscribe({
        //             next: value => {
        //                 if (cb(value)) {
        //                     subscriber.next(value);
        //                 }
        //             },
        //             error: error => {
        //                 subscriber.error(error);
        //             },
        //             complete: () => {
        //                 subscriber.complete();
        //             },
        //         });

        //         return () => {
        //             subscription.unsubscribe();
        //         }
        //     });
        // };

        // const stream$ = interval(500);

        // const evenStream$ = filterEven(stream$)
        // evenStream$.subscribe({
        //     next: value => {
        //         console.log(value)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });

        // // комбинирование
        // const filterEven = filter<number>(value => value % 2 === 0);
        // const double = map<number, number>(value => value * 2);

        // const resultStream$ = double(filterEven(stream$));
        // resultStream$.subscribe({
        //     next: value => {
        //         console.log(value)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });



        // pipe ===============================================================
        // const stream$ = interval(500);
        // const filterEven = filter<number>(value => value % 2 === 0);
        // const double = map<number, number>(value => value * 2);

        // const resultOperatorFunction$ = pipe(
        //     filterEven,
        //     double,
        // );

        // const resultStream$ = resultOperatorFunction$(stream$);
        // resultStream$.subscribe({
        //     next: value => {
        //         console.log(value)
        //     },
        //     complete: () => {
        //         console.log('completed');
        //     },
        // });

        // stream$.pipe(
        //     filterEven,
        //     double,
        // ).subscribe({
        //     next: console.log,
        //     complete: () => {
        //         console.log('completed');
        //     }
        // });


        // take
        // const stream$ = interval(500);
        // stream$.pipe(
        //     filter<number>(value => value % 2 === 0),
        //     take(4),
        //     map<number, number>(value => value * 2),
        // ).subscribe({
        //     next: console.log,
        //     complete: () => {
        //         console.log('completed');
        //     }
        // });


        // tap
        // const stream$ = interval(500);
        // stream$.pipe(
        //     filter<number>(value => value % 2 === 0),
        //     take(4),
        //     tap(console.log),
        //     map<number, number>(value => value * 2),
        // ).subscribe({
        //     next: console.log,
        //     complete: () => {
        //         console.log('completed');
        //     }
        // });


        // startWith
        // const stream$ = timer(1000, 1000);
        // stream$.pipe(
        //     startWith(-1)
        // ).subscribe({
        //     next: console.log,
        //     complete: () => {
        //         console.log('completed');
        //     }
        // });


        // combineLatest
        //         const timerOne$ = timer(1000, 4000);
        //         const timerTwo$ = timer(2000, 4000);
        //         const timerThree$ = timer(3000, 4000);
        //         // combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
        //         //     ([timerValOne, timerValTwo, timerValThree]) => {
        //         //         console.log(
        //         //             `Timer One Latest: ${timerValOne},
        //         //        Timer Two Latest: ${timerValTwo},
        //         //        Timer Three Latest: ${timerValThree}`
        //         //         );
        //         //     }
        //         // )
        //         timerOne$.pipe(
        //             combineLatestWith(timerTwo$, timerThree$),
        //         ).subscribe(([timerValOne, timerValTwo, timerValThree]) => {
        //             console.log(
        //             `Timer One Latest: ${timerValOne},
        // Timer Two Latest: ${timerValTwo},
        // Timer Three Latest: ${timerValThree}`
        //             );
        //         });


        // takeWhile
        // const source$ = of(1, 2, 3, 4, 5);
        // source$
        //     .pipe(takeWhile(val => val <= 3))
        //     .subscribe(val => console.log(val));




        // Задача 1 - реализация swipe =================================================
        // const down$ = fromEvent<MouseEvent>(document, 'mousedown');
        // const up$ = fromEvent<MouseEvent>(document, 'mouseup');

        // function getXPosition(event: MouseEvent) {
        //     return event.clientX;
        // }

        // function swipe$(
        //     down$: Observable<MouseEvent>,
        //     up$: Observable<MouseEvent>,
        // ) {
        //     return up$.pipe(
        //         map(getXPosition),
        //         zipWith(down$.pipe(map(getXPosition))),
        //         map(([downPosition, upPosition]) => downPosition - upPosition),
        //         filter(diff => Math.abs(diff) > 30),
        //     )
        // }

        // swipe$(down$, up$).subscribe(swipeDiff => {
        //     console.log(swipeDiff);
        // });

        // up$.pipe(
        //     map(getXPosition),
        //     withLatestFrom(down$.pipe(map(getXPosition))),
        //     map(([downPosition, upPosition]) => downPosition - upPosition),
        //     filter(diff => Math.abs(diff) > 30),
        // ).subscribe(swipeDiff => {
        //     console.log(swipeDiff);
        // });


        //  проверки разницы между combineLatestWith и withLatestFrom ============================
        // const sourceA = interval(3000).pipe(map((data) => `SourceA ${data}`));
        // const sourceB = interval(1000).pipe(map((data) => `SourceB ${data}`));
        // const timer$ = timer(30000);

        // sourceA.pipe(
        //     combineLatestWith([sourceB]),
        //     takeUntil(timer$),
        // ).subscribe(([src1, src2]) => {
        //     console.log(src1, src2)
        // })

        // sourceA.pipe(
        //     withLatestFrom(sourceB),
        //     takeUntil(timer$)
        // ).subscribe(([src1, src2]) => {
        //     console.log(src1, src2)
        // })


        // Observables высшего порядка ===================================================
        // const stream$ = interval(500).pipe(
        //     map(() => interval(1000)),
        // );
        // stream$.subscribe(console.log);

        // mergeAll 
        // const stream$ = interval(500).pipe(
        //     map(() => interval(1000)),
        //     mergeAll(),
        // );
        // stream$.subscribe(console.log);

        // mergeMap
        // const stream$ = interval(500).pipe(
        //     mergeMap((index) => {
        //         return interval(1000).pipe(
        //             tap((value) => {
        //                 console.log(`Посетитель ${index} - напиток ${value}`)
        //             })
        //         )
        //     }),
        // );
        // stream$.subscribe();

        //  concurrent
        // const stream$ = interval(500).pipe(
        //     mergeMap(
        //         index => interval(1000).pipe(
        //             take(3),
        //             tap({
        //                 next: value => {
        //                     console.log(`Посетитель ${index + 1} - напиток ${value + 1}`)
        //                 },
        //                 complete: () => {
        //                     console.log('completed');
        //                 }
        //             }),
        //         ),
        //         2,
        //     ),
        // );
        // stream$.subscribe(console.log);

        // concatMap
        // const stream$ = interval(500).pipe(
        //     concatMap(
        //         index => interval(1000).pipe(
        //             take(3),
        //             tap({
        //                 next: value => {
        //                     console.log(`Посетитель ${index + 1} - напиток ${value + 1}`)
        //                 },
        //                 complete: () => {
        //                     console.log('completed');
        //                 }
        //             }),
        //         ),
        //     ),
        // );
        // stream$.subscribe(console.log);

        // switchMap
        // const stream$ = interval(1000).pipe(
        //     switchMap(
        //         index => interval(300).pipe(
        //             tap(value => {
        //                 console.log(`Посетитель ${index + 1} - напиток ${value + 1}`)
        //             }),
        //             take(6),
        //         ),
        //     ),
        // );
        // stream$.subscribe(console.log);

        // exhaustMap
        // const stream$ = interval(500).pipe(
        //     exhaustMap(
        //         index => interval(1000).pipe(
        //             tap(value => {
        //                 console.log(`Посетитель ${index + 1} - напиток ${value + 1}`)
        //             }),
        //             take(6),
        //         ),
        //     ),
        // );
        // stream$.subscribe(console.log);



        // Задача 2 dragndrop ===================================================================
        // const box = document.querySelector('.draggable') as HTMLElement;

        // function dragElement$(element: HTMLElement): Observable<any> {
        //     const elementMosedown$ = fromEvent<MouseEvent>(element, 'mousedown');
        //     const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
        //     const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

        //     return elementMosedown$.pipe(
        //         tap(event => {
        //             event.preventDefault();
        //         }),
        //         // takeUntil(mouseup$), //- вложенный поток все равно продолжит жизнь,
        //         // take(1), // - вложенный поток в switchMap все равно продолжит жизнь,
        //         switchMap(({ offsetX, offsetY }) => mousemove$.pipe(
        //             tap(event => {
        //                 event.preventDefault();
        //             }),
        //             map(({ clientX, clientY }) => ({
        //                 top: clientY - offsetY,
        //                 left: clientX - offsetX,
        //             })),
        //             takeUntil(mouseup$), // - комплитит mousemove$
        //             tap({
        //                 complete: () => {
        //                     console.log('Completed tap');
        //                 }
        //             }),
        //         )),
        //         // takeUntil(mouseup$), //- комплитит родительский поток dragElement$
        //     );
        // }

        // dragElement$(box).subscribe({
        //     next: ({ left, top }) => {
        //         box.style.left = `${left}px`;
        //         box.style.top = `${top}px`;
        //     },
        //     complete: () => {
        //         console.log('Completed subscribe');
        //     }
        // });



        // Задача 3  обработка значений input =====================================================================
        // const inputElement = document.getElementById('search') as HTMLElement;

        // function liveSearch<T>(): OperatorFunction<string, string> {
        //     return pipe(
        //         debounceTime(300),
        //         filter(searcParam => !searcParam || searcParam.length >= 3),
        //         distinctUntilChanged(),
        //         // switchMap - для отправки на бэк
        //     );
        // }

        // fromEvent<InputEvent>(inputElement, 'input')
        //     .pipe(
        //         map(({target}) => (target as HTMLInputElement).value),
        //         liveSearch<string>(),
        //         // map - редактирования html
        //     )
        //     .subscribe(value => {
        //         console.log(value);
        //     })




        // Обработка ошибок =======================================================================
        // new Observable<number>(subscriber => {
        //     subscriber.next(1);
        //     subscriber.next(10);
        //     subscriber.error('Error!');
        // })
        //     .pipe(
        //         catchError(error => {
        //             console.log(error);
        //             return of(null);

        //             // return EMPTY;
        //             // return interval(1000);
        //             // return NEVER;
        //             // return throwError(() => new Error('Need retry'));
        //         }),
        //         // retry({
        //         //     count: 3,
        //         //     delay: 3000,
        //         //     resetOnSuccess: false,
        //         // }),
        //     )
        //     .subscribe({
        //         next: console.log,
        //         complete: () => {
        //             console.log('Completed');
        //         },
        //         error: error => {
        //             console.log('Error' + error);
        //         }
        //     });




        // Subject ======================================================================================
        // const subj$ = new Subject<number>();
        // // const subj$ = new BehaviorSubject<number>(0);
        // // const subj$ = new ReplaySubject<number>(2);
        // // const subj$ = new AsyncSubject<number>();

        // subj$.subscribe(value => {
        //     console.log(`Subcribe 1 - ${value}`)
        // });

        // subj$.next(1);
        // subj$.next(2);
        // subj$.next(3);

        // setTimeout(() => {
        //     subj$.next(4);
        //     subj$.next(5);
        //     subj$.next(6);
        // }, 2000);

        // setTimeout(() => {
        //     subj$.subscribe(value => {
        //         console.log(`Subcribe 2 - ${value}`)
        //     })

        //     subj$.next(7);
        //     subj$.next(8);
        //     subj$.next(9);

        //     // console.log(subj$.value);

        //     subj$.complete();
        // }, 4000);

        // setTimeout(() => {
        //     subj$.subscribe(value => {
        //         console.log(`Subcribe 3 - ${value}`)
        //     })
        // }, 6000);



        // Пара слов про скедулеры ==========================================================
        // const testArray = Array.from({ length: 10 }).map((_value, index) => index);

        // scheduled(testArray, asyncScheduler).subscribe(v => {
        //     console.log('Subscribe 1 - ', v)
        // });
        // console.log('Test');
        // scheduled(testArray, asapScheduler).subscribe(v => {
        //     console.log('Subscribe 2 - ', v)
        // });

        // const testArray = Array.from({ length: 10 }).map((_value, index) => index);
        // from(testArray)
        //     .pipe(
        //         tap(v => {
        //             console.log('Default scheduler', v)
        //         }),
        //         // observeOn(asyncScheduler),
        //         tap(v => {
        //             console.log('Before async scheduler', v)
        //         }),
        //         // subscribeOn(asapScheduler),
        //     )
        //     .subscribe(v => {
        //         console.log('async subscribe - ', v)
        //     });

        // of(1, 2, 3).subscribe(v => {
        //     console.log('sync subscribe - ', v)
        // });

        // Задачка на скедулеры ============================================================================
        // const streamFirst$ = of(1, 2);
        // const streamSecond$ = of(10);
        // const stream$ = combineLatest([
        //     streamFirst$,
        //     streamSecond$,
        // ]);
        // stream$.subscribe(console.log);

        // const streamFirst$ = of(1, 2);
        // const streamSecond$ = of(10);
        // const stream$ = combineLatest([
        //     streamSecond$,
        //     streamFirst$,
        // ]);
        // stream$.subscribe(console.log);

        // const streamFirst$ = scheduled([1, 2], asyncScheduler);
        // const streamSecond$ = of(10);
        // const stream$ = combineLatest([
        //     streamFirst$,
        //     streamSecond$,
        // ]);
        // stream$.subscribe(console.log);
    }
}
