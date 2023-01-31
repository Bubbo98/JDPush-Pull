<script>
    import WrapperSchede from './WrapperSchede.svelte';
    import WrapperRicette from './WrapperRicette.svelte';
    import {ricetteShower, schedeShower} from '$lib/Store.js'
    import { slide, fade } from 'svelte/transition';
    import { get } from 'svelte/store';
    import Buttons from './Buttons.svelte';

    let divSchedeShow = false;
    let divRicetteShow = false;
    let showSchede = 'false';
    let showRicette = 'false';

    function show(){
    showSchede = get(schedeShower);
    showRicette = get(ricetteShower);
    if (showSchede === 'true' && showRicette === 'false'){
        divRicetteShow = false;
        divSchedeShow= true;
    } else if (showSchede === 'false' && showRicette === 'true'){
        divSchedeShow= false;
        divRicetteShow = true;
    } else if (showSchede === 'false' && showRicette === 'false'){
        divSchedeShow= false;
        divRicetteShow = false;
    }
}
</script>
<div class='container flexSpaceAroundRow'>
    <Buttons on:show={show} />    
</div>

{#if divSchedeShow}
<div in:slide={{delay: 300, duration: 1000}} out:fade={{duration: 250}} class='showSchede grid'>
    <WrapperSchede />
</div>
{/if}
{#if divRicetteShow}
<div in:slide={{delay: 300, duration: 1000}} out:fade={{duration: 250}}  class='showRicette grid'>
    <WrapperRicette />
</div>
{/if}



<style>
    .container{
        margin-bottom: 50px;
        margin-top: 150px;
        border-radius: 50px;
        
    }
    .showSchede{
        height: 500px;
        grid-template-columns: 28% 28% 44%;
        transition: transform 300ms linear;
        border-radius: 50px;
    }
    .showRicette{
        height: 500px;
        grid-template-columns: 1fr 1fr 1fr;
        transition: transform 300ms linear;
        border-radius: 50px;
    }
</style>