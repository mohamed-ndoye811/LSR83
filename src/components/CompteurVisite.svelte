<script>
  import { gsap, Expo } from "gsap";
  import { onMount, onDestroy } from "svelte";

  let compteur;

  onMount(() => {
    gsap.from(compteur, {
      y: 500,
      duration: 1,
      ease: Expo.easeOut,
      stagger: 0.1,
    });
  });

  //---[ COMPTEUR DE VISITES ]---

  /*  
  INFOS POUR LE COMPTEUR:
  
  Namespace: LSR83000VisitCount
  clé: nombreVisites

  Lien site pour voir son état | https://api.countapi.xyz/get/LSR83000VisitCount/nombreVisites
  Lien pour le remettre à zéro | https://api.countapi.xyz/set/LSR83000VisitCount/nombreVisites?value=0
*/

  let compteurVisites = "";

  updateVisitCount();

  function updateVisitCount() {
    fetch(
      "https://api.countapi.xyz/update/LSR83000VisitCount/nombreVisites?amount=1"
    )
      .then((res) => res.json())
      .then((res) => {
        compteurVisites = res.value;
      });
  }
</script>

<div class="visitCount" bind:this={compteur}>
  <p class="visitCount__nombre">{compteurVisites}</p>
  &nbsp;
  <p>VISITES</p>
</div>

<style type="text/scss">
  $primary-color: #0066cc;

  $secondary-color-100: #ffd700;
  $secondary-color-200: #e2c000;

  .visitCount {
    background-color: $secondary-color-100;
    color: #0066cc;
    overflow: hidden;
    width: 10%;
    height: 4%;
    position: fixed;
    bottom: 0;
    right: 12.5%;
    border-radius: 0.8vw 0.8vw 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-style: italic;
    font-size: 1vw;
  }
</style>
