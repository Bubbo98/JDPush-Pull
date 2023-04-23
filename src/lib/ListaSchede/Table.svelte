<script>
  export let schede = [];
  console.log(schede);
</script>

<table>
  <thead>
    <tr>
      <td>Data Inizio</td>
      <td>Data Scheda</td>
      <td>Data Fine</td>
    </tr>
  </thead>
  <tbody>
    {#each schede as scheda}
      <tr>
        <td />
      </tr>
    {/each}
  </tbody>
</table>
