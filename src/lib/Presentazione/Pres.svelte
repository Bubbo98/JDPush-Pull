<script>
    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';

    let Collage = getContext('Collage');
</script>

<div class="fullWidth flexCenter alignItemsCenter">
    <div class="wrapper flexCenter relative">
        <img class='immagine fullHeight fullWidth absolute' src={Collage} alt='' >
        <div class='testo textAlignCenter relative lineHeightTitleH SpecialElite'>
            <h1>
            Siamo una coppia fitness che ha pensato alle esigenze di tutti.
            Chi ha poco tempo, chi non sa da dove partire o semplicemente per chi ha voglia di allenarsi ma non ha una guida.
            Ricerchiamo benessere e soddisfazione personale.
            Scegliete la vostra categoria per impostare la vostra scheda e "Push & Pull"!
            </h1>
        </div>
        
    </div>
</div>
<style>
    .wrapper{
        width: 600px;
        height: 600px;
        overflow: hidden;
        appearance: none;
        border-radius: 100px;
        padding: 1em 2em;
        border: 2px solid black;
    }
    .testo{
        width: 80%;;
        height: 300px;
        color:#000033;
        font-size: 14px;
        z-index: 1;
        background-color: transparent;

    }
    .immagine{
        opacity: 0.7;
        left: 0;
        top: 0;
        z-index: 0;
    }
</style>
