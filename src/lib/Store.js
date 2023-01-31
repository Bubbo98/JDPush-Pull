import {writable, readable} from 'svelte/store'

export const schedeShower = writable('false');
export const ricetteShower = writable('false');
export const prinAvan = readable([
    "Il livello principiante è adatto se non ti sei mai allenata o se vuoi riprendere dopo un lungo periodo di inattività.",
    "Il livello avanzato è adatto se ti alleni da tempo e hai una buona conoscenza della tecnica degli esercizi e del tuo corpo.",
]);

export const listaAttrezzi = readable([
    '',
    '',
    '',
    '',
    '',
    ''
]);
export const title = readable([
    'Gym Principiante',
    'Gym Avanzato',
    'Home Principiante',
    'Home Avanzato',
    'Calisthenics Principiante',
    'Calisthenics Avanzato'
]);


export const indexSchede = writable('');
export const indexPres = writable('');
export const indexPA = writable('');
export const indexRicette = writable('');
export const cart = writable(false);
export const user = writable(false);
