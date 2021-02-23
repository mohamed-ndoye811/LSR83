<script>
  import { each } from "svelte/internal";
</script>

<div class="container">
  <div class="infoPlanningAnnuel">
    Pour toutes sorties en car les participants doivent verser un acompte, pour
    frais de dossier, de 20€ à l'inscription.<br /><br />

    Cet acompte, qui correspond au coût du transport, ainsi que les 10€
    d’assurance ne seront pas remboursés si l’annulation se fait moins de 45
    jours avant le départ.<br /><br />

    Les personnes participant aux voyages et non adhérents (famille, amis)
    doivent signer une decharge<br /><br />

    Pour des raisons de commodités il n'est plus possible d'attendre les
    participants au delà de 5 minutes.<br /><br />

    Notre association reçoit, de la mairie de Toulon, quelques invitations pour
    des spectacles à l'opéra vu le nombre restreint de places (5 !) attribuées
    il sera établi un roulement.<br /><br />

    <b><u>UNIQUEMENT POUR LES TOULONNAIS :</u></b><br />
    Il est possible d'obtenir des places individuellement en se présentant 15 jours
    avant la date au Service Animation Séniors, 10 place louis Blanc
  </div>

  <div class="activitesAnnee">
    <ul class="activites">
      {#each Array(20) as _}
        <li>
          <p>10-17 OCTOBRE</p>
          <p>SORTIE À EVIAN</p>
          <p>ANTENNE</p>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style type="text/scss">
  $primary-color: #0066cc;

  $secondary-color-100: #ffd700;
  $secondary-color-200: #e2c000;

  .activites {
    display: flex;
    flex-direction: column;
    li {
      padding: 15px 20px 15px 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .activitesAnnee {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 55%;
    height: 75vh;
    font-size: 1.15vw;
    font-weight: 600;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  }

  .infoPlanningAnnuel {
    background-color: $secondary-color-100;
    width: 40%;
    height: 70vh;
    border-radius: 20px;
    color: $primary-color;
    padding: 20px 30px 30px 30px;
    font-size: 1.12vw;
    font-weight: 600;
    text-align: justify;
  }
</style>
