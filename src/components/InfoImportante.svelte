<script>
  import { onMount } from "svelte";

  let informationImportante = "Information importante!";

  let texteInformationImportante = (
    informationImportante.toUpperCase() + " - "
  ).repeat(3);

  onMount(() => {});
</script>

<div class="infoImportante">
  {#each Array(3) as _}
    <span class="infoImportante__texte">
      &nbsp;{texteInformationImportante}
    </span>
  {/each}
</div>

<style type="text/scss">
  @import "../globals.scss";

  .infoImportante {
    height: 40px;
    width: 100%;
    background-color: $secondary-color-100;
    color: $primary-color;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 1;

    &__texte {
      font-size: 1.25vw;
      font-weight: 600;
      animation: scrollTxtInfoImportante 40s linear infinite;
      z-index: 1;
    }
  }

  @keyframes scrollTxtInfoImportante {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>
