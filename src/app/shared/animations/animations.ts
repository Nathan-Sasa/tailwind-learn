import {trigger, transition, style, animate, animation} from '@angular/animations';


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