<script>
  import Button from "$lib/ui/Button.svelte";
  import OpSection from "./sections/OPSection.svelte";
  import StSection from "./sections/STSection.svelte";

  let sectionST = false;
  let sectionOP = false;
</script>

<div class="flex w-full h-full items-center justify-center">
  <div class="flex flex-col space-y-4 h-full justify-between py-20">
    <span class="justify-center h-full flex"
      >Bella Fra Scegli quale espansione vuoi vedere</span
    >
    <div class="h-full flex flex-col justify-start">
      <div class="flex w-[500px] justify-between">
        <Button noBorder={false} on:click={() => (sectionST = !sectionST)}>
          <div
            class="w-full from-[#2E3192] to-[#1BFFFF] bg-gradient-to-tr rounded-xl"
          >
            ST
          </div>
          {#if sectionST}
            <StSection />
          {/if}
        </Button>
        <Button noBorder={false} on:click={() => (sectionOP = !sectionOP)}>
          <div
            class="w-full from-[#D4145A] to-[#FBB03B] bg-gradient-to-tr rounded-xl"
          >
            OP
          </div>
          {#if sectionOP}
            <OpSection />
          {/if}
        </Button>
      </div>
    </div>
  </div>
</div>
