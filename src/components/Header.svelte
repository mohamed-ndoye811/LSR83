<script>
  import Administration from "./../pages/Administration.svelte";
  // your script goes here
  let pageSelected = "Acceuil";
</script>

<header>
  <img src="./img/LSR_LOGO/LSR83_logo.png" alt="" id="headerLogo" />
  <ul class="nav">
    <li class="nav__link">ÉQUIPE</li>
    <li class="nav__link">ACTIVITÉS</li>
    <li class="nav__link">BSV</li>
    <li class="nav__link">PLANNINGS</li>
    <li class="nav__link">ADMINISTRATION</li>
  </ul>
  <div class="administrationPannel" />
</header>

<style type="text/scss">
  $primary-color: #0066cc;

  $secondary-color-100: #ffd700;
  $secondary-color-200: #e2c000;

  header {
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 75%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    & #headerLogo {
      height: 8vh;
    }

    .nav {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;

      &__link {
        color: $secondary-color-100;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9em;
        cursor: pointer;
      }
    }
  }
</style>
