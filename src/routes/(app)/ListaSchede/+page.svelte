<script>
  import Table from "../../../lib/ListaSchede/Table.svelte";

  export let data;
</script>

<body>
  <div class="mt-20 items-center flex flex-col w-full mb-64">
    <h2>Le mie schede</h2>
    <Table schede={data.schede} />
  </div>
</body>

<style>
  body {
    position: relative;
    top: 60px;
  }
</style>
