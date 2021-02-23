<script>
  export let textToShow;

  import { db } from "../utils/firestore.js";

  let textes = [];

  db.collection("administration").onSnapshot((data) => {
    textes = data.docs;
  });
</script>

<div class="selectionContainer">
  {#each textes as texte}
    {#if texte.id == textToShow}
      <p>{@html texte.data().texte}</p>
    {/if}
  {/each}
</div>

<style type="text/scss">
  $primary-color: #0066cc;

  $secondary-color-100: #ffd700;
  $secondary-color-200: #e2c000;

  :global(.background) {
    background-image: url("./img/Toulon-2.jpg");
    filter: blur(5px);
    background-clip: border-box;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.3;
  }

  .selectionContainer {
    height: 80vh;
    overflow-y: scroll;

    p {
      font-size: 2vw;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: default;
    }
  }
</style>
