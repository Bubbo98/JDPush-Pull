<script>
    import {listaAttrezzi} from '$lib/Store';
    export let index;
    console.log(index);
</script>

<div>
    <ul>
        {#each $listaAttrezzi[index] as Attrezzo}
            <li>{Attrezzo}</li>
        {/each}
    </ul>
</div>