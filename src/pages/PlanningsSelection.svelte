<script>
  import Annuel from "./Plannings/Annuel.svelte";
  import Mensuel from "./Plannings/Mensuel.svelte";
  import { db } from "../utils/firestore";

  let hideSelection = false;
  let planningSelected = "";

  function planningSelection(choix) {
    planningSelected = choix;
    hideSelection = true;
  }

  function backButton() {
    hideSelection = false;
    planningSelected = "";
  }
</script>

<ul class:hideSelection>
  <li on:click={() => planningSelection("Annuel")}>Annuel</li>
  <li on:click={() => planningSelection("Mensuel")}>Mensuel</li>
</ul>

{#if planningSelected != ""}
  <div class="container">
    {#if planningSelected === "Annuel"}
      <Annuel />
    {:else if planningSelected === "Mensuel"}
      <Mensuel {db} />
    {/if}
    <div class="bouton" on:click={() => backButton()}>RETOUR</div>
  </div>
{/if}

<style type="text/scss">
  ul {
    visibility: visible;
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);

    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;

    li {
      font-size: 4vw;
      font-weight: 700;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .hideSelection {
    visibility: hidden;
  }

  .bouton {
    width: 150px;
    font-size: 1vw;
    font-weight: 700;
    text-align: center;
    align-self: flex-end;
    margin-top: 15px;
  }
</style>
