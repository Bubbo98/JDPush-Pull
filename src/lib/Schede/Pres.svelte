<script>
    import {indexPres, indexPA, prinAvan, title} from "$lib/Store.js";
    import { get } from 'svelte/store';
    import { page } from '$app/stores';
    import ListaAttrezzi from '$lib/Attrezzi/ListaAttrezzi.svelte';
    const url = get(page);
    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';
    console.log(url.route.id);
    let backPhotoJ = getContext('backPhotoJ');
    let backPhotoD = getContext('backPhotoD');

    if (url.route.id == '/(app)/Schede/SchedeGP'){
            indexPres.update(() => {
                return 0;
            });
            indexPA.update(() => {
                return 0;
            })
        } else if (url.route.id == '/(app)/Schede/SchedeGA'){
            indexPres.update(() => {
                return 1;
            });
            indexPA.update(() => {
                return 1;
            })
        } else if (url.route.id == '/(app)/Schede/SchedeHP'){
            indexPres.update(() => {
                return 2;
            });
            indexPA.update(() => {
                return 0;
            })
        } else if (url.route.id == '/(app)/Schede/SchedeHA'){
            indexPres.update(() => {
                return 3;
            });
            indexPA.update(() => {
                return 1;
            })
        } else if (url.route.id == '/(app)/Schede/SchedeCP'){
            indexPres.update(() => {
                return 4;
            });
            indexPA.update(() => {
                return 0;
            })
        } else if (url.route.id == '/(app)/Schede/SchedeCA'){
            indexPres.update(() => {
                return 5;
            });
            indexPA.update(() => {
                return 1;
            })
        }
    
    let show = false;
    

    function handleClick(){
        show = !show;
    }
</script>
<div class='flexCenter alignItemsCenter'>
    <div class='fullHeight fullWidth'> 
        <h1 class='Kanit textAlignCenter'>{$title[$indexPres]}</h1>
        <p class='prinAvan underline Lato'>{$prinAvan[$indexPA]}</p>
        <p class='Lato'>Qui di seguito riportato, troverai il necessario per svolgere questa versione:</p>
            <p class='Lato'>JD push & pull ?? un marchio per chiunque voglia cominciare il suo percorso fitness.Le sessioni di allenamento vanno dai 40 ai 60 minuti e si basano sullo svolgimento di diversi circuiti che hanno l???obiettivo di allenare tutto il corpo.</p>
            
            <p class='Lato'>Per aumentare la propria massa muscolare l'allenamento diventa efficace solo se si ha  raggiunto l'esaurimento muscolare e stimolare meccanicamente la capacit?? di forza.
            Ecco perch??  non ?? per donne/uomini che mirano a migliorare solo la tonicit?? del corpo e le proprie abilit?? coordinative, ma vogliono anche aumentare la forza e quindi le loro prestazioni atletiche.
            </p>
            
            <h2 class='RobotoSlab'>TIPS PER IL MIGLIORAMENTO</h2>

            <p class='Lato'>Ecco le mie regole principali per far s?? che tutto questo funzioni:</p>
            <ol>
                <li class='Lato'> Non allenarti tutti i giorni, ma in base a come reagisce il tuo corpo, scegli 3 o massimo 4 sessioni alla settimana. Allenandoti troppo rischierai di allontanarti dall???obiettivo di vederti e sentirti meglio. Questo fa una grande differenza sui tuoi risultati. Ti stupirai, e le tue gambe ti ringrazieranno. Provare per credere.</li>
                <li class='Lato'> Niente movimenti fatti di scatto e senza controllo: nella parte di tonificazione ?? fondamentale eseguire le ripetizioni con un???esecuzione controllata e assolutamente non veloce. Questo modo di lavorare lo impareremo insieme anche attraverso le live workout e i video tutorial. Pi?? sarai costante, pi?? imparerai a sentire la differenza nella qualit?? del lavoro.</li>
                <li class='Lato'> Il cardio ?? presente in misura minore in quanto ci servir?? per dare dinamismo ai workout e per allenare il nostro cuore. Purtroppo si pensa ancora che solo grazie all???attivit?? aerobica ?? possibile dimagrire, ma questo falso mito non fa altro che allontanare le donne da un fisico asciutto e tonico.</li>
                <li class='Lato'> Per ottenere risultati serve un lavoro sinergico tra allenamento costante e buone abitudini alimentari. Tu non sei diversa, non hai qualcosa in meno: puoi farcela.</li>
            </ol>
            
            
            <p class='Lato'>Hai dubbi sulla tipologia di Workout? Ricordati che avrai sempre accanto a te il nostro Team Operation che potrai contattare tramite questo form. risponderanno entro 48h, esclusi weekend e festivi.</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        {#if $indexPres > 1}
        <button on:click={handleClick}>Lista degli attrezzi </button>
            {#if show}
                <ListaAttrezzi index={$indexPres}/>
            {/if}
        {/if}
        <div class="flexSpaceAroundRow wrapper fullWidth">
            <span class="container flexWrap flex"><img class= 'fullWidth contain' src={backPhotoJ[$indexPres]} alt='Immagine'></span>
            <span class="container flexWrap flex"><img class= 'fullWidth contain' src={backPhotoD[$indexPres]} alt='Immagine'></span>
        </div>
    </div>
</div>

<style>
    .wrapper{
        margin-top: 50px;
    }
    img{
        height: 80%;
        border-radius: 25px;
    }
    .container{
        width:450px;
        height: 80%;
        margin-bottom: 50px;
    }
    li:not(:last-child) { 
        margin-bottom: 5px;
    }
    li{  
        line-height: 20px;
    }
    .prinAvan{
        font-size: 24px;
    }

</style>