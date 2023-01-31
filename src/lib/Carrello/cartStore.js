import {writable} from 'svelte/store';

export const indexCart = writable();

export const products = writable([
    {
        id: 'GPD',
        title: 'Scheda Gym Principiante Donna',
        gender: 'Donna',
        price: 2,
        Q: 1
    },
    {
        id: 'GPU',
        title: 'Scheda Gym Principiante Uomo',
        gender: 'Uomo',
        price: 2,
        Q: 1
    },
    {
        id: 'GAD',
        title: 'Scheda Gym Avanzato Donna',
        gender: 'Donna',
        price: 4,
        Q: 1
    },
    {
        id: 'GAU',
        title: 'Scheda Gym Avanzato Uomo',
        gender: 'Uomo',
        price: 4,
        Q: 1
    },
    {
        id: 'CPD',
        title: 'Scheda Calistenics Principiante Donna',
        gender: 'Donna',
        price: 3,
        Q: 1
    },
    {
        id: 'CPU',
        title: 'Scheda Calistenics Principiante Uomo',
        gender: 'Uomo',
        price: 3,
        Q: 1
    },
    {
        id: 'CAD',
        title: 'Scheda Calistenics Avanzato Donna',
        gender: 'Donna',
        price: 7,
        Q: 1
    },
    {
        id: 'CAU',
        title: 'Scheda Calistenics Avanzato Uomo',
        gender: 'Uomo',
        price: 7,
        Q: 1
    },
    {
        id: 'HPD',
        title: 'Scheda Home Principiante Donna',
        gender: 'Donna',
        price: 11,
        Q: 1
    },
    {
        id: 'HPU',
        title: 'Scheda Home Principiante Uomo',
        gender: 'Uomo',
        price: 11,
        Q: 1
    },
    {
        id: 'HAD',
        title: 'Scheda Home Avanzato Donna',
        gender: 'Donna',
        price: 8, 
        Q: 1
    },
    {
        id: 'HAU',
        title: 'Scheda Home Avanzato Uomo',
        gender: 'Uomo',
        price: 8, 
        Q: 1
    }
])

export const cart = writable([]);
