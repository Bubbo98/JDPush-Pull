<script>
    import {onMount} from 'svelte';

    let thisObj;
    let text = '';

    onMount(() => {
        text = thisObj.textContent;
    });
</script>

<div bind:this={thisObj} class='open textAlignCenter'>
    <slot />
</div>

<style>
    .open{
        grid-area: 4 / 1 / 4 / span 2;
    }
</style>