<script>
    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';

    let Logo = getContext('Logo');
</script>

<video 
        width="100" 
        height="100" 
        loop 
        autoplay 
        muted 
        title="Logo"
    >
        <source src={Logo}  type="video/mp4" >
</video>
