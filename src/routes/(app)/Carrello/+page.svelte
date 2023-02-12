<script>
    import { cart } from "$lib/Carrello/cartStore";
    /** @type {import('./$types').LayoutLoad} */
    import {getContext} from 'svelte';

    $: console.log(localStorage.getItem(0))

    // for(let i = 0; i < localStorage.length; i++){
    //     if (localStorage.getItem(pocketbase_auth)){
    //     $cart.push(JSON.parse(localStorage.getItem(i)));
    //     }
    // }

    let ArrowLeft = getContext('ArrowLeft');
    let ArrowRight = getContext('ArrowRight');

    function removeFromCart(product){
        $cart = $cart.filter((value) => {
            if(value.id != product.id) return value;
        });
    }

    function plusQuantity(product){
        for(let item of $cart) {
            if (item.id === product.id){
                if(product.Q >= 1){
                    product.Q += 1
                    $cart = $cart
                } else {
                    $cart = $cart.filter((i) => i != product)
                }
                return;
            }
        }
    }
    function minusQuantity(product){
        for(let item of $cart) {
            if (item.id === product.id){
                if(product.Q > 1){
                    product.Q -= 1
                    $cart = $cart
                } else {
                    $cart = $cart.filter((i) => i != product)
                }
                return;
            }
        }
    }

    $: total = $cart.reduce((sum, item) => sum + item.price * item.Q, 0);
</script>

<body class='body'>
<div class='container'>
    <h1 class='textAlignCenter marginB'>Carrello</h1>
    <table class='marginB fullWidth'>
        <thead>
            <tr>
                <th>Descrizione</th>
                <th>Prezzo Unitario</th>
                <th>Quantità</th>
            </tr>
        </thead>
        <tbody>
        {#each $cart as item}
            <tr>
                <td class='textAlignCenter fullWidth'>{item.title}</td>
                <td class='textAlignCenter fullWidth'>{item.price} €</td>
                <td class='fullWidth'>
                    <div class='quantita flexSpaceAroundRow alignItemsCenter fullWidth fullHeight'>
                        <button class='arrow' on:click={() => minusQuantity(item)}><img src={ArrowLeft} class='imgContainFull' alt='Freccia In Sù'></button>
                        {item.Q}
                        <button class='arrow' on:click={() => plusQuantity(item)}><img src={ArrowRight} class='imgContainFull' alt='Freccia In Giù'></button>
                </div>
                </td>
            </tr>
            <tr>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <td class="fullWidth"><span class='btnRemove' on:click={() => removeFromCart(item)}>Rimuovi dal carrello </span></td>
            </tr>
        {/each}
        </tbody>
    </table>
    <div class='pagamento flexSpaceAroundRow alignItemsCenter'>
        <button>Paga</button>
        <span> {total} € </span>
    </div>
</div>
</body>

<style>
table{
    table-layout: fixed;
}
th,
td{
    padding-bottom: 40px;
}
.marginB{
    margin-bottom: 100px;
}
.pagamento{
    width: 50%;
}
.pagamento > button{
    width: 100px;
    height: 50px;
}
.arrow{
        width: 30px;
        height: 30px;
        padding: 0;
}

</style>