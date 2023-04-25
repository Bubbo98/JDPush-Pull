<script>
  import { ricetteShower, schedeShower } from "$lib/Store";
  import Buttons from "$lib/Schede/Buttons.svelte";
  import AlertAuthenticated from "../../../lib/Schede/AlertAuthenticated.svelte";

  ricetteShower.update(() => {
    return "false";
  });
  schedeShower.update(() => {
    return "false";
  });
  let showAlert = false;
  let showUomo = false;
  let showDonna = false;

  function handleClick(event) {
    if (event == "uomo") {
      showUomo = !showUomo;
    } else if (event == "donna") {
      showDonna = !showDonna;
    }
  }
</script>

<body>
  <slot />
  <div class="wrapper mt-16">
    <div class="container space-y-1">
      <button
        on:click={() => {
          handleClick("uomo");
        }}>Uomo</button
      >
      {#if showUomo}
        <Buttons gender="0" bind:showAlert />
      {/if}
    </div>
    <div class="container space-y-1">
      <button
        on:click={() => {
          handleClick("donna");
        }}>Donna</button
      >
      {#if showDonna}
        <Buttons gender="1" bind:showAlert />
      {/if}
    </div>
  </div>
  {#if showAlert}
    <AlertAuthenticated bind:showAlert />
  {/if}
</body>

<style>
  body {
    position: relative;
    top: 60px;
  }
  button {
    background: #7f3df6;
    background-image: -webkit-linear-gradient(top, #7f3df6, #3df6cb);
    background-image: -moz-linear-gradient(top, #7f3df6, #3df6cb);
    background-image: -ms-linear-gradient(top, #7f3df6, #3df6cb);
    background-image: -o-linear-gradient(top, #7f3df6, #3df6cb);
    background-image: -webkit-gradient(to bottom, #7f3df6, #3df6cb);
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    height: 0;
    line-height: 0;
    color: black;
    font-family: Times New Roman;
    width: 600px;
    font-size: 40px;
    font-weight: 100;
    padding: 27px;
    -webkit-box-shadow: -6px -6px 11px 0 #99c624;
    -moz-box-shadow: -6px -6px 11px 0 #99c624;
    box-shadow: -6px -6px 11px 0 #99c624;
    text-shadow: -5px 5px 15px #000000;
    border: groove #0059a0 3px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
  button:hover {
    border: groove #337fed 3px;
    background: #241ed0;
    background-image: -webkit-linear-gradient(top, #241ed0, #3d94f6);
    background-image: -moz-linear-gradient(top, #241ed0, #3d94f6);
    background-image: -ms-linear-gradient(top, #241ed0, #3d94f6);
    background-image: -o-linear-gradient(top, #241ed0, #3d94f6);
    background-image: -webkit-gradient(to bottom, #241ed0, #3d94f6);
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    text-decoration: none;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 150px;
  }
  .container {
    display: flex;
    width: 600px;
    flex-wrap: wrap;
  }
</style>
