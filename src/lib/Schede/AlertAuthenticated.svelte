<script>
  export let showAlert = false;
  console.log("ciao");
</script>

<div class="absolute left-1/2 top-1/2 flex flex-col">
  <div class="flex justify-end">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="material-symbols-outlined" on:click={() => (showAlert = false)}
      >close</span
    >
  </div>
  <div>
    Mi spiace ma devi autenticarti per aggiungere dei prodotti, altrimenti non
    sapremo a chi fare la scheda...
  </div>
</div>
