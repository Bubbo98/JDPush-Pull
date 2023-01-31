<script>
    import Pres from './Pres.svelte';
    import P from './P.svelte';
    import Title from './Title.svelte';
    import A from './A.svelte';
    import {indexSchede} from '$lib/Store.Js'
    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';

    let TitleGym = getContext('TitleGym');
    let TitleHome = getContext('TitleHome');
    let TitleCali = getContext('TitleCali');
    let HomeCoppia = getContext('HomeCoppia');
    let GymCoppia = getContext('GymCoppia');
    let CaliCoppia = getContext('CaliCoppia');

    function showPage(url){
        if (url == 'GP'){
            indexSchede.update(() => {
                return 0;
            })

        } else if (url == 'GA'){
            indexSchede.update(() => {
                return 1;
            })
        } else if (url == 'HP'){
            indexSchede.update(() => {
                return 2;
            })
        } else if (url == 'HA'){
            indexSchede.update(() => {
                return 3;
            })
        } else if (url == 'CP'){
            indexSchede.update(() => {
                return 4;
            })
        } else if (url == 'CA'){
            indexSchede.update(() => {
                return 5;
            })
        }
    }

</script>

<div class='wrapper relative grid'>
    <img class='immagine fullHeight fullWidth absolute' src={GymCoppia} alt=''>
    <Title><img src={TitleGym} alt='Gym'></Title>
    <Pres>Il Workout Gym è completo e versatile, ideale per chi ama l’allenamento con pesi e macchinari che permetterà di lavorare sulla forza.</Pres>
    <P><button class='btnSchedeRicette'  on:click={showPage('GP')}><a class='white' href='/Schede/SchedeGP'>Principiante</a></button></P>
    <A><button class='btnSchedeRicette'  on:click={showPage('GA')}><a class='white' href='/Schede/SchedeGA'>Avanzato</a></button></A>
</div>
<div class='wrapper relative grid'>
    <img class='immagine fullHeight fullWidth absolute' src={HomeCoppia} alt=''>
    <Title><img src={TitleHome}  alt='Gym'></Title>
    <Pres>Il Workout Home è completo e versatile, ideale per chi ha la necessità di essere flessibile. Ti permetterà di ottimizzare il tuo tempo senza trascurare la qualità degli allenamenti.</Pres>
    <P><button class='btnSchedeRicette'  on:click={showPage('HP')}><a class='white' href='/Schede/SchedeHP'>Principiante</a></button></P>
    <A><button class='btnSchedeRicette'  on:click={showPage('HA')}><a class='white' href='/Schede/SchedeHA'>Avanzato</a></button></A>
</div>
<div class='wrapper relative grid'>
    <img class='immagine fullHeight fullWidth absolute' src={CaliCoppia} alt=''>
    <Title><img src={TitleCali} alt='Gym'></Title>
    <Pres>Il Workout Calisthenics è completo e versatile, ideale per chi ama l’allenamento a corpo libero, mettendosi alla prova con vere e proprie sfide contro la gravità.</Pres>
    <P><button class='btnSchedeRicette'  on:click={showPage('CP')}><a class='white' href='/Schede/SchedeCP'>Principiante</a></button></P>
    <A><button class='btnSchedeRicette'  on:click={showPage('CA')}><a class='white' href='/Schede/SchedeCA'>Avanzato</a></button></A>
</div>

<style>
    .wrapper{
        grid-template-columns: repeat(auto-fill,3);
        grid-template-rows: 25% 50% 25%;
    }

    .immagine{
        opacity: 0.7;
        left: 0;
        top: 0;
        z-index: 0;
        border-radius: 50px;
    }
</style>