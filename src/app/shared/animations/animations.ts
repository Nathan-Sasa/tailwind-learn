import {trigger, transition, style, animate, query, stagger} from '@angular/animations';


export const fadeInDelay = trigger ( 
    'faceInDelay', [
        transition(':enter', [
            style({opacity: 0}),
            animate('500ms 300ms ease-in-out', style({opacity: 1, top: 0}))
        ]),
        transition(':leave', [
            animate('500ms ease-in-out', style({opacity: 0}))
        ])
    ]
)
export const fadeInDelayXl = trigger ( 
    'faceInDelayXl', [
        transition(':enter', [
            style({opacity: 0}),
            animate('500ms 500ms ease-in-out', style({opacity: 1, top: 0}))
        ]),
        transition(':leave', [
            animate('500ms ease-in-out', style({opacity: 0}))
        ])
    ]
)
export const fadeInDelayXxl = trigger ( 
    'faceInDelayXxl', [
        transition(':enter', [
            style({opacity: 0}),
            animate('500ms 1s ease-in-out', style({opacity: 1, top: 0}))
        ]),
        transition(':leave', [
            animate('500ms ease-in-out', style({opacity: 0}))
        ])
    ]
)

export const slideInUp = trigger (
    'sledInUp', [
        transition(':enter', [
            style({transform: 'translateY(15px)', opacity: 0}),
            animate('500ms ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave',[
            animate('500ms ease-in-out', style({transform: 'translateY(15px)', opacity: 0}))
        ])
    ]
)
export const slideInUpLong = trigger(
    'sledInUpLong', [
        transition(':enter', [
            style({transform: 'translateY(40px)', opacity: 0}),
            animate('500ms 500ms ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave',[
            animate('500ms ease-in-out', style({transform: 'translateY(40px)', opacity: 0}))
        ])
    ]
)
export const slideInUpLongXl = trigger(
    'sledInUpLongXl', [
        transition(':enter', [
            style({transform: 'translateY(40px)', opacity: 0}),
            animate('500ms 500ms ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave',[
            animate('500ms ease-in-out', style({transform: 'translateY(40px)', opacity: 0}))
        ])
    ]
)
export const slideInUpLongXxl = trigger(
    'sledInUpLongXxl', [
        transition(':enter', [
            style({transform: 'translateY(40px)', opacity: 0}),
            animate('500ms 900ms ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave',[
            animate('500ms ease-in-out', style({transform: 'translateY(40px)', opacity: 0}))
        ])
    ]
)

export const slideInDown = trigger(
    'slideInDown', [
        transition(':enter', [
            style({transform: 'translateY(-15px)', opacity: 0}),
            animate('500ms ease-in-out', style({transform: 'transformY(0)',opacity: 1}))
        ]),
        transition(':leave', [
            animate('500ms ease-in-out', style({transform: 'translateY(-15px)', opacity: 0}))
        ])
    ]
)

export const slideInRight = trigger(
    'slideInRight', [
        transition(':enter', [
            style({transform: 'translateX(25px)', opactity: 0}),
            animate('500ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
            animate('500ms ease-in-out', style({transform: 'translateX(25px)', opacity: 0}))
        ])
    ]
)

// cetta animation fait :
    
    // 1. Affiche une liste de projets
    // 2. Les anime avec un effet stagger au momemt du scroll
    // 3. Utilise IntersectionObserver pour declencher l'animation quqnd la section entre dans l'ecran.

    export const staggerList = stagger('staggerList', [
        transition('hidden => visible', [
            query(
                '*',
                [
                    style({opacity: 0, transform: 'translateY(20px)' }),
                    stagger(150, [
                        animate('500ms ease-in-out', style ({opacity: 1, transform: 'translateY(0)'}))
                    ])
                ],
                {optional: true}
            )
        ])
    ])