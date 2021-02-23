<script>
  let homeInfo, collegue, partenaires, actu;

  let actuSelected = 1;
</script>

<div class="accueilContainer">
  <div class="homeInfo" bind:this={homeInfo}>
    <h3 class="homeInfo__titre">QUI SOMMES NOUS?</h3>
    <span class="homeInfo__separateur" />
    <p class="homeInfo__texte">
      <b><i>Loisir et Solidarité des Retraités de TOULON et du VAR</i></b>
      est une association loi 1901 dont le but est de permettre aux personnes en
      pré-retraite ou en retraite de réaliser leurs aspirations de loisirs culturels,
      sportifs. Pour cela nous vous proposons des activités très diversifiées afin
      d'intéresser le plus grand nombre de nos adhérents. Nous nous promettons, également,
      d'agir, aussi souvent que cela se peut, par solidarité dans le cadre de la
      cité et de la nation et de nous opposer à tout ce qui induit inégalités et
      exclusion, il ne faut pas oublier que notre LSR, toutes les LSR, sont une émanation
      de la CGT . Pour ces raisons nous soutenons toutes les actions qui contribuent
      à améliorer le pouvoir d'achat, la santé, et la protection sociale.
    </p>
    <div class="homeInfo__bouton bouton">NOUS REJOINDRE</div>
  </div>

  <div class="collegues" bind:this={collegue}>
    <h3 class="collegues__titre">VISITEZ NOS COLLÈGUES</h3>
    <span class="collegues__separateur" />

    <table class="collegues__liste">
      <tr>
        <td class="collegues__liste__item">
          <a target="_blank" href="http://www.lsrfede.fr">LA FÉDÉRATION</a>
        </td>
        <td class="collegues__liste__item">
          <a target="_blank" href="http://www.cda-blog-asso.com/lsr"
            >LSR DU MORBIHAN</a
          >
        </td>
        <td class="collegues__liste__item">
          <a target="_blank" href="http://ambro649.free.fr">LSR AIR FRANCE</a>
        </td>
        <td class="collegues__liste__item">
          <a target="_blank" href="http://www.lsr92.fr">LSR 92</a>
        </td>
      </tr>

      <tr>
        <td class="collegues__liste__item">
          <a target="_blank" href="http://lsr21dijon.org">LSR DIJON</a>
        </td>
        <td class="collegues__liste__item">
          <a target="_blank" href="http://www.lsr-ratp.org">LSR RATP</a>
        </td>
        <td class="collegues__liste__item">
          <a
            target="_blank"
            href="http://lsrmarseille.fr/spip.php/accueil/index.html"
            >LSR MARSEILLE</a
          >
        </td>
        <td class="collegues__liste__item" />
      </tr>
    </table>
  </div>

  <ul class="partenaires" bind:this={partenaires}>
    <li class="partenaires__image">
      <img src="./img/Partenaires/PACA.png" alt="blabla" srcset="" />
    </li>
    <li class="partenaires__image">
      <img src="./img/Partenaires/Cadierenne.png" alt="blabla" srcset="" />
    </li>
    <li class="partenaires__image">
      <img src="./img/Partenaires/Seyne-sur-mer.png" alt="blabla" srcset="" />
    </li>
    <li class="partenaires__image">
      <img src="./img/Partenaires/Solies.png" alt="blabla" srcset="" />
    </li>
  </ul>

  <div class="actu" bind:this={actu}>
    <div class="actu__image" />
    <div class="actu__selector">
      <span
        class="actu__selector__circle"
        class:actu__selector__circle--active={actuSelected === 1}
        on:click={() => (actuSelected = 1)}
      />
      <span
        class="actu__selector__circle"
        class:actu__selector__circle--active={actuSelected === 2}
        on:click={() => (actuSelected = 2)}
      />
      <span
        class="actu__selector__circle"
        class:actu__selector__circle--active={actuSelected === 3}
        on:click={() => (actuSelected = 3)}
      />
    </div>
    <div class="actu__articleContainer">
      <h3 class="actu__titre">TITRE ACTUALITÉ</h3>
      <span class="actu__separateur" />
      <p class="actu__texte">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
        tincidunt tortor quis lobortis. Nam gravida aliquet diam id ultricies.
        Nulla gravida metus eget nunc placerat sollicitudin.Maecenas nibh
        lectus, efficitur a tempor in, porttitor at lacus….
      </p>
      <p class="actu__boutonPlus">EN SAVOIR +</p>
    </div>
  </div>
</div>

<style type="text/scss">
  $primary-color: #0066cc;

  $secondary-color-100: #ffd700;
  $secondary-color-200: #e2c000;

  .accueilContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .homeInfo {
    width: 57%;
    display: flex;
    flex-direction: column;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);

    &__titre {
      font-size: 3.2vw;
      padding: 0;
      margin: 0;
    }

    &__separateur {
      &::before {
        content: "";
        display: inline-block;
        background-color: $secondary-color-100;
        width: 25%;
        height: 5px;
        position: relative;
        top: -15px;
      }
    }

    &__texte {
      position: relative;
      top: -15px;
      font-size: 1.17vw;
      font-weight: 600;
      text-align: justify;
      text-overflow: ellipsis;
      line-height: 1.25em;
    }

    &__bouton {
      width: fit-content;
      align-self: flex-end;
      cursor: pointer;
    }
  }

  .collegues {
    position: relative;
    top: 10px;
    width: 47vw;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);

    &__titre {
      font-size: 3.2vw;
    }

    &__separateur {
      &::before {
        content: "";
        display: inline-block;
        background-color: $secondary-color-100;
        width: 25%;
        height: 5px;
        position: relative;
        top: -25px;
      }
    }

    &__liste {
      position: relative;
      bottom: 25px;
      width: 90%;

      &__item {
        a {
          font-size: 1.2vw;
          text-decoration: none;
          font-style: italic;
          font-weight: 600;
          color: $secondary-color-100;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .partenaires {
    display: flex;
    list-style: none;
    position: absolute;
    top: 73%;

    &__image {
      margin-right: 45px;

      img {
        max-width: 400px;
        max-height: 3.7vw;
      }
    }
  }

  .actu {
    background-color: $secondary-color-100;
    color: $primary-color;
    position: absolute;
    right: 0;
    top: 0px;
    border-radius: 2%;
    max-width: 31vw;
    height: 80%;

    &__image {
      background-image: url("./img/actu/images/image_1.jpg");
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 45%;
      overflow: hidden;

      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &__selector {
      width: 30%;
      height: 30px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-evenly;

      &__circle {
        &::before {
          content: "";
          display: inline-block;
          background-color: #9da895;
          width: 1vw;
          height: 1vw;
          border-radius: 50%;
          position: relative;
          top: -20px;
        }

        &:hover {
          cursor: pointer;
        }

        &--active {
          &::before {
            background-color: $primary-color;
            content: "";
            display: inline-block;
            width: 1vw;
            height: 1vw;
            border-radius: 50%;
            position: relative;
            top: -20px;
          }
        }
      }
    }

    &__separateur {
      &::before {
        content: "";
        display: inline-block;
        background-color: $primary-color;
        width: 25%;
        height: 5px;
        position: relative;
        top: -25px;
      }
    }

    &__titre {
      font-size: 2.5vw;
    }

    &__texte {
      font-size: 1.2vw;
      font-weight: 600;
      text-align: justify;
      position: relative;
      top: -25px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__boutonPlus {
      font-size: 1.5vw;
      margin-top: -20px;
      font-style: italic;
      position: relative;
      align-self: flex-end;
      cursor: pointer;
    }

    &__articleContainer {
      width: 85%;
      position: relative;
      left: 50%;
      top: 3%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
    }
  }
</style>
