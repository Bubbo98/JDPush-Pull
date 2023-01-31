<script>
    import {onMount} from 'svelte';

    let thisObj;
    let text = '';

    onMount(() => {
        text = thisObj.textContent;
    });
</script>

<div bind:this={thisObj} class='a flexCenter alignItemsCenter'>
    <slot />
</div>

<style>
    .a{
        grid-area: 3 / 2 / 3 / 3;
        border-top: 1px solid black;
    }
</style>