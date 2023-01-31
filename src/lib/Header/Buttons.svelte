<script>
    import Carrello from '$lib/Carrello/Carrello.svelte';
    import User from '$lib/User/Login.svelte';
    import {cart, user} from '$lib/Store';

    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';

    let UserIMG = getContext('UserIMG');
    let CartIMG = getContext('CartIMG');

    function showCart(){
        $cart = !$cart;
        $user = false;
    }
    function showUser(){
        $user = !$user;
        $cart = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='backgroundButtonH' on:click={showUser}><img class='backgroundButtonH imgContainFull' src={UserIMG} alt='User'></div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='backgroundButtonH' on:click={showCart}><img class='backgroundButtonH imgContainFull' src={CartIMG} alt='Carrello'></div>

{#if !$cart}
    <div class='hide'>
        <Carrello />
    </div>
{:else}
    <div class='show  absolute fullHeightVH backgroundButtonH'>
        <Carrello />
    </div>
{/if}
    
{#if !$user}
    <div class='hide'>
        <User/>
    </div>
{:else}
    <div class='show absolute fullHeightVH backgroundButtonH'>
        <User  />
    </div>
{/if}
    

<style>
    div{
        width: 50px;
        height: 50px;
        border: 0;
    }
    .show{
        top: 100px;
        right: 0;
        width: 400px;
        margin-right: 0;
    }
</style>