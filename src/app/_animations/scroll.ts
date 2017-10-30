import { trigger, animate, style, state, sequence, group, animateChild, query, stagger, transition } from '@angular/animations';

export const RouterAnimation = trigger('RouterAnimation', [

  transition('* => prev'
    // `7 => 6, 7 => 5, 7 => 4, 7 => 3, 7 => 2, 7 => 1,
    // 6 => 5, 6 => 4, 6 => 3, 6 => 2, 6 => 1,
    // 5 => 4, 5 => 3, 5 => 2, 5 => 1,
    // 4 => 3, 4 => 2, 4 => 1,
    // 3 => 2, 3 => 1,
    // 2 => 1,
    // * => prev`
    , [
    // initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        overflow: 'hidden',
        width: 'calc(100% - 100px)',
        height: '100%',
        transform: 'translateY(-100%)'

      }),
      { optional: true }
    ),
    query('widget',
      style({
        transform: 'translateY(50px)',
        opacity: 0,
      }),
      { optional: true }
    ),
    sequence([
      group([
        // move page off screen bottom on leave
        query(':leave',
          animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
            style({
              position: 'fixed',
              overflow: 'hidden',
              width: 'calc(100% - 100px)',
              height: '100%',
              transform: 'translateY(100%)'

            })
          ),
          { optional: true }
        ),
        // move page in screen from top to bottom
        query(':enter',
          animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
            style({
              transform: 'translateY(0%)'
            })
          ),
          { optional: true }
        ),
      ]),
      query('widget', stagger('80ms', [
        animate('300ms ease',
          style({
            transform: 'translateY(0px)',
            opacity: 1,
            // width: 'calc(50% - 24px)',
            // margin: '12px'
          })
        )]),
        { optional: true }
      )
    ])
    // group([
    //   // move page off screen bottom on leave
    //   query(':leave',
    //     animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
    //       style({
    //         position: 'fixed',
    // overflow: 'hidden',
    //         width: '100%',
    //         height: '100%',
    //         transform: 'translateY(100%)'
    //       })
    //     ),
    //   {optional:true}),
    //   // move page in screen from top to bottom
    //   query(':enter',
    //     animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
    //       style({
    //         transform: 'translateY(0%)'
    //       })
    //     ),
    //     {optional:true}
    //   ),
    //
    //   query('widget', stagger('500ms', [
    //     animate('700ms', style({opacity: '1'}))
    //   ])),
    // ]),
  ]),
  transition('* => next'
    // `0 => *, 1 => 2, 1 => 3, 1 => 4, 1 => 5, 1 => 6, 1 => 7,
    // 2 => 3, 2 => 4, 2 => 5, 2=> 6, 2 => 7,
    // 3 => 4, 3 => 5, 3 => 6, 3 => 7,
    // 4 => 5, 4 => 6, 4 => 7,
    // 5 => 6, 5 => 7,
    // 6 => 7,
    // * => next`
    , [
    // Initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        overflow: 'hidden',
        width: 'calc(100% - 100px)',
        height: '100%',
        transform: 'translateY(100%)'
      }),
      { optional: true }
    ),
    group([
      // move page off screen top on leave
      query(':leave',
        animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
          style({
            position: 'fixed',
            overflow: 'hidden',
            width: 'calc(100% - 100px)',
            height: '100%',
            transform: 'translateY(-100%)'
          })
        ),
        { optional: true }
      ),
      // move page in screen from top to bottom
      query(':enter',
        animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
          style({
            transform: 'translateY(0%)'
          })
        ),
        { optional: true }
      )
    ]),
  ])
])

// // export function ScrollView(name: string, targetView: string, currentPosition: number, duration: number): any {
// //
// //   console.log(window.location.pathname);
// //
// //   return trigger(name, [
// //     state('void', style({
// //       position: 'fixed',
// //       width: 'calc(100% - 100px)',
// //       height: '100%'
// //     })),
// //     state('*', style({
// //       position: 'fixed',
// //       width: 'calc(100% - 100px)',
// //       height: '100%'
// //     })),
// //     transition(':enter', [  // before 2.1: transition('void => *', [
// //       style({transform: 'translateY(100%)'}),
// //       animate(duration + 'ms cubic-bezier(0.77, 0, 0.175, 1)', style({transform: 'translateY(0%)'}))
// //     ]),
// //     transition(':leave', [  // before 2.1: transition('* => void', [
// //       style({transform: 'translateY(0%)'}),
// //       animate(duration + 'ms cubic-bezier(0.77, 0, 0.175, 1)', style({transform: 'translateY(-100%)'}))
// //     ])
// //   ]);
// //
// //   // return trigger('ScrollView', [
// //   //   state('false', style({ transform: 'translateY(0)' }) ),
// //   //   state('true',  style({ transform: 'translateY(100%)' }) ),
// //   //   transition('0 => 1', animate( '300ms ease-in')),
// //   //   transition('1 => 0', animate( '300ms ease-out')),
// //   // ]);
// // }
