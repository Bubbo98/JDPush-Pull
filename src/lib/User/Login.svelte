<script>
  import { currentUser } from "$lib/utils";
</script>

<div>
  {#if $currentUser}
    <div class="flexSpaceAroundRow marginT">
      <a href="/ListaSchede">Lista Schede</a>
      <form action="/Auth/Logout" method="POST">
        <button type="submit">Logout</button>
      </form>
    </div>
  {:else}
    <div class="flexSpaceAroundRow marginT">
      <a data-sveltekit-preload-code="hover" href="/Auth/Login">Login</a>
      <a href="/Auth/Register">Register</a>
    </div>
  {/if}
</div>

<style>
  .marginT {
    margin-top: 20px;
  }
</style>
