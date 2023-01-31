<script >
    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';

    let Gallery = getContext('Gallery');
    import {onMount} from 'svelte';

    let Carousel;
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    })
</script>

<div>
    <svelte:component this={Carousel}
    duration={10000}
    autoplay
    timingFunction="linear"
    dots={false}
    arrows={false}
    swiping={false}
    >  
        {#each Gallery as photo , index (index)}
            <video autoplay loop muted><source src={photo} type='video/mp4'> </video>
        {/each}
    </svelte:component> 
</div>



<style>
    div{
        width:500px;
        height: 500px;
        margin-top: 50px;
    }
    video{
        width: 500px;
        height: 500px;
        object-fit: scale-down;
    }
</style>

