<script>
  import { ricetteShower, schedeShower } from "$lib/Store.js";
  import { get } from "svelte/store";
  import { createEventDispatcher } from "svelte";
  /** @type {import('./$types').LayoutLoad} */
  import { getContext } from "svelte";

  let SchedeIcon = getContext("SchedeIcon");
  let RicetteIcon = getContext("RicetteIcon");
  let ForeverIcon = getContext("ForeverIcon");

  const dispatch = createEventDispatcher();

  let showSchede = "false";
  let showRicette = "false";

  function handleClick(event) {
    showSchede = get(schedeShower);
    showRicette = get(ricetteShower);
    if (
      showSchede === "true" &&
      event === "schede" &&
      showRicette === "false"
    ) {
      schedeShower.update(() => {
        return "false";
      });
    } else if (
      showRicette === "true" &&
      event === "ricette" &&
      showSchede === "false"
    ) {
      ricetteShower.update(() => {
        return "false";
      });
    } else if (
      showSchede === "false" &&
      event === "schede" &&
      showRicette === "false"
    ) {
      schedeShower.update(() => {
        return "true";
      });
    } else if (
      showRicette === "false" &&
      event === "ricette" &&
      showSchede === "false"
    ) {
      ricetteShower.update(() => {
        return "true";
      });
    } else if (
      showSchede === "true" &&
      event === "ricette" &&
      showRicette === "false"
    ) {
      schedeShower.update(() => {
        return "false";
      });
      ricetteShower.update(() => {
        return "true";
      });
    } else if (
      showRicette === "true" &&
      event === "schede" &&
      showSchede === "false"
    ) {
      ricetteShower.update(() => {
        return "false";
      });
      schedeShower.update(() => {
        return "true";
      });
    }
    dispatch("show");
  }
</script>

<div class="pulse flexColumn textAlignCenter">
  <span>Schede</span>
  <button on:click={() => handleClick("schede")}
    ><img
      class="backgroundButtonH fullWidth fullHeight"
      src={SchedeIcon}
      alt="Pulsante Schede"
    /></button
  >
</div>
<div class="pulse flexColumn textAlignCenter">
  <span>Ricette</span>
  <button on:click={() => handleClick("ricette")}
    ><img
      class="backgroundButtonH fullWidth fullHeight"
      src={RicetteIcon}
      alt="Pulsante Ricette"
    /></button
  >
</div>
<div class="pulse flexColumn textAlignCenter">
  <a class="white removeTextDec flexColumn" href="/Forever">
    <span>Integrazione</span>
    <button
      ><img
        class="backgroundButtonH fullWidth fullHeight"
        src={ForeverIcon}
        alt="Pulsante Forever"
      /></button
    >
  </a>
</div>

<style>
  button {
    width: 150px;
    height: 150px;
    border: 0;
  }
  button:hover,
  button:focus {
    color: #fff;
  }
  span {
    color: white;
    background-color: black;
    font-size: 24px;
  }
</style>
