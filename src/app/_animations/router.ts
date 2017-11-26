import { trigger, animate, style, state, sequence, group, animateChild, query, stagger, transition } from '@angular/animations';

export const RouterAnimation = trigger('routerAnimation', [

  transition('* => prev', [
    // initial state of new route
    query(':enter',
      style({
        // position: 'fixed',
        // overflow: 'hidden',
        // width: 'calc(100% - 100px)',
        // height: '100%',
        // transform: 'translateY(-100%)'

      }),
      { optional: true }
    ),
    // query('widget',
    //   style({
    //     transform: 'translateY(50px)',
    //     opacity: 0,
    //   }),
    //   { optional: true }
    // ),
    sequence([
      group([
        // move page off screen bottom on leave
        query(':leave',
          animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
            style({
              // position: 'fixed',
              // overflow: 'hidden',
              // width: 'calc(100% - 100px)',
              // height: '100%',
              // transform: 'translateY(100%)'

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
      // query('widget', stagger('80ms', [
      //   animate('300ms ease',
      //     style({
      //       transform: 'translateY(0px)',
      //       opacity: 1,
      //     })
      //   )]),
      //   { optional: true }
      // )
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
  transition('* => next', [
    // Initial state of new route
    query(':enter',
      style({
        // position: 'fixed',
        // overflow: 'hidden',
        // width: 'calc(100% - 100px)',
        // height: '100%',
        // transform: 'translateY(100%)'
      }),
      { optional: true }
    ),
    group([
      // move page off screen top on leave
      query(':leave',
        animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
          style({
            // position: 'fixed',
            // overflow: 'hidden',
            // width: 'calc(100% - 100px)',
            // height: '100%',
            // transform: 'translateY(-100%)'
          })
        ),
        { optional: true }
      ),
      // move page in screen from top to bottom
      query(':enter',
        animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
          style({
            // transform: 'translateY(0%)'
          })
        ),
        { optional: true }
      )
    ]),
  ])
])
