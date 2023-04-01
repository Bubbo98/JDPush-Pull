<script>
  import Card01 from "$lib/json/Card01";

  let orderQ = "init";
  let orderId = "init";

  const sortQuantity = (orderPassed) => {
    if (orderPassed == "init" || orderPassed == "desc") {
      Card01.page.sort((a, b) => b.quantity - a.quantity);
      Card01.page = Card01.page;
      orderQ = "asc";
      orderId = "init";
    } else {
      Card01.page.sort((a, b) => a.quantity - b.quantity);
      Card01.page = Card01.page;
      orderQ = "desc";
      orderId = "init";
    }
  };
  const sortID = (orderPassed) => {
    console.log(orderPassed);
    if (orderPassed == "init" || orderPassed == "desc") {
      Card01.page.sort((a, b) => a._id - b._id);
      Card01.page = Card01.page;
      orderId = "asc";
      orderQ = "init";
    } else {
      Card01.page.sort((a, b) => b._id - a._id);
      Card01.page = Card01.page;
      orderId = "desc";
      orderQ = "init";
    }
  };
</script>

<table class="w-full">
  <thead>
    <tr class="w-full flex justify-between">
      <th class="w-[25%]" on:click={() => sortID(orderId)}>Numero</th>
      <th class="flex justify-start w-[50%]">Nome</th>
      <th class="w-[25%]" on:click={() => sortQuantity(orderQ)}>Quantità</th>
    </tr>
  </thead>
  <tbody>
    {#each Card01.page as card}
      <tr class="w-full flex justify-between">
        <td class="w-[25%] flex justify-center">{card._id}</td>
        <td class="flex justify-start w-[50%]">{card.name}</td>
        <td class="w-[25%] flex justify-center">{card.quantity}</td>
      </tr>
    {/each}
  </tbody>
</table>
