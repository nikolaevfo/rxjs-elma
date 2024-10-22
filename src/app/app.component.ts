import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

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
        const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
            console.log('START');

            let count = 0;

            const intervalId = setInterval(() => {
                count += 1;

                console.log('INCREMENT', count);

                subscriber.next(count);

                if (count === 5) {
                    subscriber.complete(); // Observable dead
                    // subscriber.error(new Error('overflow')); // Observable dead
                }
            }, 1000);

            //     return () => { // Destroy function
            //         console.log('DESTROY');

            //         clearInterval(intervalId);
            //     }
        });

        // sequence$.subscribe((count: number) => {
        //     console.log(count);
        // });

        // setTimeout(() => {
        //     sequence$.subscribe(count => {
        //         console.log(count);
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
        //             terminalLog(count);
        //         },
        //         error: error => {
        //             terminalLog(error);
        //         },
        //         complete: () => {
        //             terminalLog('completed');
        //         },
        //     })
        // );
        // setTimeout(() => {
        //     console.log('subscription.closed', allSubscription.closed);
        //     allSubscription.unsubscribe();
        //     console.log('subscription.closed', allSubscription.closed);
        // }, 2000);
    }
}
