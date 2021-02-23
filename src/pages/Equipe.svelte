<script>
  let equipe = [
    {
      titre: "Conseil d'administration",
      ouvert: false,
    },
    {
      titre: "Commission de contrôle",
      ouvert: false,
    },
    {
      titre: "Responsables d'Actvité",
      ouvert: false,
    },
    {
      titre: "Les antennes",
      ouvert: false,
    },
  ];
</script>

<div class="container">
  <h1 id="titrePage">ÉQUIPE</h1>
  {#each equipe as pannel}
    <div class="option">
      <p class="option__titre">{pannel.titre}</p>
      <div class="option__ouvert">{pannel.ouvert == false ? "+" : "-"}</div>
    </div>
  {/each}
</div>

<style type="text/scss">
  #titrePage {
    font-size: 1.5em;
    transform: translateX(45%);
  }

  .container {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2em;
    cursor: pointer;
  }
</style>
