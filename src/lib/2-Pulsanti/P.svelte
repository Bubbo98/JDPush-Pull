<script>
    import {onMount} from 'svelte';

    let thisObj;
    let text = '';

    onMount(() => {
        text = thisObj.textContent;
    });
</script>

<div bind:this={thisObj} class='p alignItemsCenter flexCenter'>
    <slot />
</div>

<style>
    .p{
        grid-area: 3 / 1 / 3 / 2;
        border-right: 1px solid black ;
        border-top: 1px solid black;
    }
</style>