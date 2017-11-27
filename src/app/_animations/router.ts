import { trigger, animate, style, state, sequence, group, animateChild, query, stagger, transition } from '@angular/animations';

export const RouterAnimation = trigger('routerAnimation', [

  transition('* => prev', [
    // initial state of new route
    query(':enter, :leave',
      style({
        // position: 'fixed',
        // width: 'calc(100% - (100vh / 7))',
        // height: '100%'
        position: 'absolute'
      }),
      { optional: true }
    ),
    query(':enter',
      style({
        transform: 'translateX(-5%)',
        opacity: '0',
        zIndex: '2'
        // background: '#f0f0f1'
      }),
      { optional: true }
    ),
    query(':leave',
      style({
        transform: 'scale(1)',
        opacity: '1',
        zIndex: '1'
      }),
      { optional: true }
    ),
    sequence([
      group([
        // move page off screen bottom on leave
        query(':leave',
          // animate('500ms cubic-bezier(0.77, 0, 0.175, 1)',
          animate('300ms ease',
            style({
              // position: 'fixed',
              // width: 'calc(100% - (100vh / 7))',
              // height: '100%',
              // transform: 'translateY(100%)'
              transform: 'scale(0.95)',
              opacity: '1'
            })
          ),
          { optional: true }
        ),
        // move page in screen from top to bottom
        query(':enter',
          animate('350ms ease',
            style({
              // transform: 'translateY(0%)'
              transform: 'translateX(0%)',
              opacity: '1',
              background: '#f0f0f1',
            })
          ),
          { optional: true }
        ),
      ])
    ])
  ]),
  transition('* => next', [
    // Initial state of new route
    query(':enter, :leave',
      style({
        position: 'absolute'
      }),
      { optional: true }
    ),
    query(':enter',
      style({
        // transform: 'translateY(100%)'
        transform: 'scale(0.95)',
        opacity: '0'
      }),
      { optional: true }
    ),
    query(':leave',
      style({
        transform: 'translateX(0%)',
        opacity: '1'
      }),
      { optional: true }
    ),
    sequence([
      group([
        // move page off screen bottom on leave
        query(':leave',
          animate('350ms ease',
            style({
              // position: 'fixed',
              // width: 'calc(100% - (100vh / 7))',
              // height: '100%',
              // transform: 'translateY(-100%)'
              background: '#f0f0f1',
              transform: 'translateX(-5%)',
              opacity: '0'
            })
          ),
          { optional: true }
        ),
        // move page in screen from top to bottom
        query(':enter',
          animate('350ms ease',
            style({
              // transform: 'translateY(0%)'
              // background: '#f0f0f1',
              transform: 'scale(1)',
              opacity: '1'
            })
          ),
          { optional: true }
        ),
      ])
    ])

  ])
])
