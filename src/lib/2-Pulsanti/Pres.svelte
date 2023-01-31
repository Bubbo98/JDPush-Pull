<script>
    import {onMount} from 'svelte';

    let thisObj;
    let text = '';

    onMount(() => {
        text = thisObj.textContent;
    });
</script>

<div bind:this={thisObj} class='pres flexCenter alignItemsCenter textAlignCenter fullHeight'>
    <slot />
</div>
<style>
    .pres{
        grid-area: 2 / 1 / 2 / 3;

        padding-left: 10px;
        padding-right: 10px;
        font-weight: 900;
        font-size: large;
        z-index: 1;
        background-color: transparent;
    }
</style>