<script>
  import Table from "../../../lib/ListaSchede/Table.svelte";

  export let data;
</script>

<body class="w-screen h-screen">
  <div class="mt-32 items-center h-full flex flex-col w-full mb-[25rem]">
    <h2 class="mt-6">Le mie schede</h2>
    <Table schede={data.schede} />
  </div>
</body>

<style>
  body {
    position: relative;
  }
</style>
