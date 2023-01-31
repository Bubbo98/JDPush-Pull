<script>
    import {onMount} from 'svelte';

    let thisObj;
    let text = '';

    onMount(() => {
        text = thisObj.textContent;
    });
</script>

<div bind:this={thisObj} class='title flexCenter alignItemsCenter fullHeight'>
    <slot />
</div>

<style>
    .title{
        z-index: 1;
        grid-area: 1 / 1 / 1 / 3;
    }
</style>