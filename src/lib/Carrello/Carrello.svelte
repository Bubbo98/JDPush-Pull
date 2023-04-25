<script>
  import { cart } from "./cartStore.js";
  import { goto } from "$app/navigation";
  /** @type {import('./$types').LayoutLoad} */
  import { getContext, onMount } from "svelte";

  export let carrello = [];

  let ArrowUp = getContext("ArrowUp");
  let ArrowDown = getContext("ArrowDown");

  function openInNewTab(url) {
    window.open(url);
  }
  function removeFromCart(product) {
    $cart = $cart.filter((value) => {
      if (value.id != product.id) return value;
    });
  }

  function plusQuantity(product) {
    for (let item of $cart) {
      if (item.id === product.id) {
        if (product.Q >= 1) {
          product.Q += 1;
          $cart = $cart;
        } else {
          $cart = $cart.filter((i) => i != product);
        }
        return;
      }
    }
  }
  function minusQuantity(product) {
    for (let item of $cart) {
      if (item.id === product.id) {
        if (product.Q > 1) {
          product.Q -= 1;
          $cart = $cart;
        } else {
          $cart = $cart.filter((i) => i != product);
        }
        return;
      }
    }
  }

  $: total = $cart.reduce((sum, item) => sum + item.price * item.Q, 0);
  $: console.log($cart);
</script>

<div>
  {#each $cart as item}
    {#if item.Q > 0}
      <div class="container spaceAround grid">
        <div
          class="gridFirstRFirstC flexCenter alignItemsCenter fullHeight fullWidth"
        >
          <span>{item.title}</span>
        </div>
        <div
          class="gridFirstRSecondC flexCenter alignItemsCenter fullHeight fullWidth"
        >
          Il costo è {item.price * item.Q}
        </div>
        <div
          class="flexColumn gridFirstRThirdC flexCenter alignItemsCenter fullHeight fullWidth"
        >
          <button class="arrow" on:click={() => plusQuantity(item)}
            ><img
              class="imgContainFull"
              src={ArrowUp}
              alt="Freccia In Sù"
            /></button
          >
          {item.Q}
          <button class="arrow" on:click={() => minusQuantity(item)}
            ><img
              class="imgContainFull"
              src={ArrowDown}
              alt="Freccia In Giù"
            /></button
          >
        </div>
        <div class="remove textAlignCenter fullWidth">
          <button
            class="fullWidth fullHeight"
            on:click={() => removeFromCart(item)}>Rimuovi dal carrello</button
          >
        </div>
      </div>
    {/if}
  {/each}
  <div class="total">
    <h4>Totale: € {total}</h4>
  </div>
  {#if $cart.length >= 1}
    <div>
      <button
        on:click={() => {
          for (let i = 0; i < $cart.length; i++) {
            localStorage.setItem(i, JSON.stringify($cart[i]));
          }
          goto("/Carrello");
        }}
        class="resetButton"><button>Vai al Pagamento</button></button
      >
    </div>
  {/if}
</div>

<style>
  .container {
    grid-template-columns: 65% 20% 15%;
    grid-template-rows: 80% 20%;
    width: 400px;
    height: 100px;
  }
  .arrow {
    width: 30px;
    height: 30%;
  }
  .remove {
    grid-area: 2 / 1 / 2 / span 3;
  }
</style>
