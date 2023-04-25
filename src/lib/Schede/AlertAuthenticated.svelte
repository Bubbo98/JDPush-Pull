<script>
  import { onMount } from "svelte";

  export let showAlert = false;

  let showClose = true;
  const closePopup = () => {
    showAlert = false;
  };

  const closeOnEscape = (e) => {
    if (e.key === "Escape" && show) {
      closePopup();
    }
  };

  onMount(() => {
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="fixed left-0 top-0 z-[52] flex h-screen w-screen items-center justify-center bg-black/[0.5]"
  on:click|self={() => {
    showAlert = false;
    closePopup();
  }}
>
  <div
    class="font-metropolis rounded-xl mmd:gap-7 mmd:text-[25px] mx-auto flex h-fit min-h-[250px] w-fit flex-col bg-gradient-to-t from-[#251d29] to-[#413349] text-center shadow-md"
  >
    <!-- POPUP HEADER -->
    <div class="mb-3 flex w-full items-center justify-between px-8 pt-7 pb-0">
      <div class="!font-metropolis text-t20 w-full !font-normal">
        <slot name="title" />
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      {#if showClose}
        <span
          class="material-symbols-outlined mmd:opacity-0 transition-all duration-150 ease-in hover:cursor-pointer hover:text-red-600"
          on:click={() => {
            showAlert = false;
          }}
        >
          close
        </span>
      {/if}
    </div>
    <div class="h-full w-full">
      <div>
        Mi spiace ma devi autenticarti per aggiungere dei prodotti, altrimenti
        non sapremo a chi fare la scheda...
      </div>
    </div>
  </div>
</div>
