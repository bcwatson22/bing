import { trigger, animate, style, state, group, query, transition, stagger } from '@angular/animations';

export const ModalAnimation = trigger('ModalAnimation', [

  state('*', style({
    display: 'none'
  })),
  state('animate, active', style({
    display: 'block'
  })),

  transition('* => animate', [

    query('.modal-bg',
      style({
        opacity: 0
      }),
      { optional: true }
    ),
    query('.modal-content',
      style({
        opacity: 0,
        // top: '{{ originTop }}',
        // left: '{{ originLeft }}',
        transform: 'scale(0)'
      }),
      { optional: true }
    ),
    query('img, h1, h2, h3, p, button',
      style({
        transform: 'translate3d(0, 20px, 0)',
        opacity: 0,
      }),
      { optional: true }
    ),

    group([
      query('.modal-bg',
        animate('500ms ease',
          style({
            opacity: 1
          })
        ),
        { optional: true }
      ),
      query('.modal-content',
        animate('500ms ease',
          style({
            opacity: 1,
            transform: 'scale(1)',
          })
        ),
        { optional: true }
      )
    ]),

    query('img, h1, h2, h3, p, button', stagger('80ms', [
      animate('300ms ease',
        style({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        })
      )]),
      { optional: true }
    )
  ]),

  transition('animate => *, active => *', [

    query('.modal-bg',
      style({
        opacity: 1
      }),
      { optional: true }
    ),
    query('.modal-content',
      style({
        opacity: 1,
        transform: 'scale(1)',
      }),
      { optional: true }
    ),

    group([
      query('.modal-bg',
        animate('300ms ease',
          style({
            opacity: 0
          })
        ),
        { optional: true }
      ),
      query('.modal-content',
        animate('300ms ease',
          style({
            opacity: 0,
            transform: 'scale(0)'
          })
        ),
        { optional: true }
      )
    ])

  ])

])
