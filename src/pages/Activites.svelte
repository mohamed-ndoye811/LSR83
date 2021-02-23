<script>
  import ActivityPage from "./activites/ActivityPage.svelte";
  import activites from "../utils/activites.js";

  let pageActivite = "";

  function choixActivité(nomActivite) {
    console.log(nomActivite);
    pageActivite = nomActivite;
  }
</script>

{#if pageActivite == ""}
  <div class="container">
    {#each activites as activity}
      <div class="activityItem" on:click={() => choixActivité(activity.nom)}>
        <img src={activity.imageSrc} alt={"image " + activity.nom} />
        <p>{activity.nom}</p>
      </div>
    {/each}
  </div>
{:else if pageActivite != ""}
  <ActivityPage activite={pageActivite} />
{/if}

<style type="text/scss">
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 85%;
    width: 100%;
  }

  .activityItem {
    height: 25vh;
    width: 22vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.2);

    p {
      position: absolute;
      font-size: 2vw;
      text-transform: uppercase;
      font-weight: 600;
      opacity: 0;
    }

    img {
      height: 100%;
      width: 100%;
    }

    &:hover {
      cursor: pointer;

      p {
        opacity: 1;
        text-shadow: 0 0 10px rgba(0, 0, 0, 1);
      }

      img {
        filter: blur(3px);
        opacity: 0.6;
      }
    }
  }
</style>
