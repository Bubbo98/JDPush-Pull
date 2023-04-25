<script>
  import { products, indexCart, cart } from "$lib/Carrello/cartStore";
  import { get } from "svelte/store";
  import { page } from "$app/stores";
  import { currentUser } from "$lib/Utils";
  const url = get(page);
  export let gender;
  export let showAlert = false;
  if (url.route.id == "/(app)/Schede/SchedeGP" && gender == 1) {
    indexCart.update(() => {
      return [0];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeGP" && gender == 0) {
    indexCart.update(() => {
      return [1];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeGA" && gender == 1) {
    indexCart.update(() => {
      return [2];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeGA" && gender == 0) {
    indexCart.update(() => {
      return [3];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeCP" && gender == 1) {
    indexCart.update(() => {
      return [4];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeCP" && gender == 0) {
    indexCart.update(() => {
      return [5];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeCA" && gender == 1) {
    indexCart.update(() => {
      return [6];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeCA" && gender == 0) {
    indexCart.update(() => {
      return [7];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeHP" && gender == 1) {
    indexCart.update(() => {
      return [8];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeHP" && gender == 0) {
    indexCart.update(() => {
      return [9];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeHA" && gender == 1) {
    indexCart.update(() => {
      return [10];
    });
  } else if (url.route.id == "/(app)/Schede/SchedeHA" && gender == 0) {
    indexCart.update(() => {
      return [11];
    });
  }
  const prodottiArray = get(products);
  let prodotto = prodottiArray[get(indexCart)];

  function addToCart(n) {
    if ($currentUser) {
      for (let item of $cart) {
        if (item.id === prodotto.id) {
          prodotto.Q += n;
          $cart = $cart;
          return;
        }
      }
      $cart = [...$cart, prodotto];
      prodotto.Q = n;
    } else {
      showAlert = true;
    }
  }
</script>

<button
  class="buttonSchede"
  on:click={() => {
    addToCart(1);
  }}>Mensile 30€</button
>
<button
  class="buttonSchede"
  on:click={() => {
    addToCart(2);
  }}>Trimestrale 80€</button
>
<button
  class="buttonSchede"
  on:click={() => {
    addToCart(3);
  }}>Semestrale 150€</button
>
