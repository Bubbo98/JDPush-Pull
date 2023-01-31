<script>
    import Pres from './Pres.svelte';
    import Open from './Open.svelte';
    import Title from './Title.svelte';
    import {indexRicette, schedeShower, ricetteShower} from '$lib/Store.js'
    import {getContext} from 'svelte';

    let Primi = getContext('Primi');
    let Secondi = getContext('Secondi');
    let Dolci = getContext('Dolci');
    let TitlePrimi = getContext('TitlePrimi');
    let TitleSecondi = getContext('TitleSecondi');
    let TitleDolci = getContext('TitleDolci');

    function showPage(url) {
        if (url == 'PR'){
            indexRicette.update(() => {
                return 0;
            })
        } else if (url == 'SE'){
            indexRicette.update(() => {
                return 1;
            })
        } else if (url == 'DO'){
            indexRicette.update(() => {
                return 2;
            })
        } 
    }
</script>

<div class='wrapper grid relative'>
    <img class='immagine fullHeight fullWidth absolute' src={Primi} alt=''>
    <Title><img src={TitlePrimi} alt='Primi'></Title>
    <Pres></Pres>
    <Open><button class='btnSchedeRicette' on:click={showPage('PR')}><a class='white' href='/Ricette/Primo'>Mostra</a></button></Open>
</div>
<div class='wrapper grid relative '>
    <img class='immagine fullHeight fullWidth absolute' src={Secondi} alt=''>
    <Title><img src={TitleSecondi} alt='Secondi'></Title>
    <Pres></Pres>
    <Open><button class='btnSchedeRicette' on:click={showPage('SE')}><a class='white' href='/Ricette/Secondo'>Mostra</a></button></Open>
</div>
<div class='wrapper relative grid'>
    <img class='immagine fullHeight fullWidth absolute' src={Dolci} alt=''>
    <Title><img src={TitleDolci} alt='Dolci'></Title>
    <Pres></Pres>
    <Open><button class='btnSchedeRicette' on:click={showPage('DO')}><a class='white' href='/Ricette/Dolce'>Mostra</a></button></Open>
</div>

<style>
    .wrapper{
        grid-template-columns: 50% 50%;
        grid-template-rows: 25% 25% 25% 25%;
    }
    .immagine{
        opacity: 0.9;
        left: 0;
        top: 0;
        border-radius: 50px;
    }
</style>