<script>
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";

  export let variant = "";
  export let noBorder = true;
</script>

<button
  on:click
  class={twMerge(
    clsx({
      "flex items-center justify-center border-2 border-[#C0C0C0] max-w-[150px] w-full rounded-xl relative": true,
      "border-none": !noBorder,
    })
  )}
>
  <slot />
</button>
