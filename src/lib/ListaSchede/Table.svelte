<script>
  import dayjs from "dayjs";
  import { getUrl } from "$lib/utils";
  export let schede = [];
</script>

<div class="w-full h-full my-4 rounded-xl max-h-[450px] flex justify-center">
  <div
    class="bg-[#282a28] rounded-xl w-full pr-6 max-w-[650px] flex flex-col py-4"
  >
    <div class="pb-2 text-white flex justify-between pl-10 pr-5">
      <span class="text-xl">Data Inizio</span>
      <span class="text-xl">Scheda</span>
      <span class="text-xl">Data Fine</span>
    </div>
    <div
      class="flex flex-col space-y-2 h-full max-h-[50px] overflow-y-auto pl-10 pr-3"
      id="style-1"
    >
      {#each schede as scheda}
        <div
          class="pb-2 border-b text-white grid grid-cols-[0.3fr_1fr_0.3fr] gap-auto items-center"
        >
          <span>{dayjs(scheda.inizio).format("DD MMM YYYY")}</span>
          <span class="justify-self-center">
            <a
              href={getUrl(scheda.collectionId, scheda.id, scheda.scheda)}
              target="_blank"
              rel="noreferrer"
            >
              Download Scheda
            </a>
          </span>
          <span class="justify-self-end"
            >{dayjs(scheda.fine).format("DD MMM YYYY")}</span
          >
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  #style-1::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  #style-1::-webkit-scrollbar {
    width: 8px;
  }

  #style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
</style>
