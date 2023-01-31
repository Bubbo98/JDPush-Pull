import {readable} from 'svelte/store'

export const primi = readable([{
    id: 1,
    url: '/Primi/Pasta',
    img: '/primo.jpg',
    title: 'primo',
    pres: '',
},{
    id: 2,
    url: '/Primi/',
    img: '/secondo.jpg',
    title: 'secondo',
    pres: '',
}
]);