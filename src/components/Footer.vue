<template>
  <footer class="footer">
    <div class="container-footer">
      <div className="item">
        <h2 className="title1">Où nous trouver ?</h2>
        <div className="separator"></div>

        <div class="map">
          <Map />
        </div>
      </div>

      <div id="contacts" class="item">
        <h2 class="title1">Besoin d&apos;aide ?</h2>
        <div class="separator"></div>
        <ul class="list">
          <li class="list-item">
            <span class="singer-info">
              <Icon class="icon" id="address" icon="at" />
              contact@singerfrance.fr
            </span>
          </li>
          <li class="list-item">
            <span class="singer-info">
              <Icon class="icon" icon="phone" /> 02 23 62 34 82
            </span>
          </li>

          <li class="list-item">
            <span class="singer-info"
              ><Icon
                class="icon"
                id="facebook"
                :icon="{ prefix: 'fab', iconName: 'facebook' }"
              />
              Visitez notre
              <a
                style="color: #e30044"
                href="https://www.facebook.com/SingerChantepie35"
                >page</a
              >
              Facebook
            </span>
          </li>
          <li class="list-item">
            <span class="singer-info">
              <Icon
                class="icon"
                id="insta"
                :icon="{ prefix: 'fab', iconName: 'instagram' }"
              />
              Instagram here
            </span>
          </li>
        </ul>
      </div>

      <div class="item">
        <h2 class="title1">Newsletter</h2>
        <div class="separator1"></div>
        <p class="text">
          Pour souscrire à notre newsletter veuillez indiquer votre e-mail. Nous
          promettons de ne pas envoyer de publicités invasives.
        </p>
        <form class="form">
          <input
            class="input"
            type="email"
            placeholder="Entrer votre e-mail"
            required
          />
          <button class="submit" type="submit">
            <Icon class="icon" icon="envelope" />
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
/*
	Entry point for vue components
*/

/*  Page display blank  if I put these*/

import Map from "./Map.vue";

export default {
  name: "Footer",
  components: {
    Map,
  },
};
</script>

<style lang="css">
* {
  list-style: none;
  text-decoration: none;
}

.footer {
  background: white;
  box-shadow: 0px 0px 10px rgb(200, 200, 200);
}

.container-footer {
  column-gap: 38px;

  display: flex;
  padding-bottom: 20px;
}

.item {
  width: calc(100% / 3);
  flex: 1;
}

.title1 {
  margin: 0;
  padding: 20px;
  color: rgb(80, 80, 80);
}

.singer-info {
  font-size: 15pt;
}

.icon {
  font-size: 20pt;
  margin-right: 10px;
}

#address {
  color: #e30044;
}

#facebook {
  color: #3b5998;
}
#insta {
  color: #8a3ab9;
}

.list {
  padding: 10px 0 10px 0;
  margin: 0;
}
.list-item {
  padding: 10px 0 10px 20px;
}
.link {
  transition: 0.5s;
  color: rgb(120, 120, 120);
}

.text {
  font-size: 14pt;
  padding: 20px;
  margin: 0;
  color: rgb(120, 120, 120);
}

.separator {
  width: 32%;
  height: 5px;
  background: #e30044;
  margin: 0 0 0 20px;
}

.separator1 {
  width: 20%;
  height: 5px;
  background: #e30044;
  margin: 0 0 0 20px;
}

.form {
  width: calc(100% - 40px);
  padding: 0;
  margin: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 1px black;
}

.input {
  width: 100%;
  padding: 10px 20px;
  border: none;
  background: rgb(245, 245, 245);
}
.submit {
  border: none;
  padding: 10px 20px;
  background: #e30044;
  color: white;
  cursor: pointer;
}

.map {
  margin: 17px 0 0 19px;
  width: 500px;
}
</style>
