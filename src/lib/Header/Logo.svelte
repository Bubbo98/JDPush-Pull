<script>
    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';

    let Logo = getContext('Logo');
    export let width = 0;
    export let height = 0;
</script>

<video 
        width={width}
        height={height}
        loop 
        autoplay 
        muted 
        title="Logo"
    >
        <source src={Logo}  type="video/mp4" >
</video>
