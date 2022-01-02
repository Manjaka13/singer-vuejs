<template>
  <section className="copyright">
    <div className="container-copyright">
      <p className="left">
        Fait avec ❤ par
        <a
          className="link"
          href="https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/"
        >
          Tahir</a
        >
        et
        <a
          className="link"
          href="https://www.linkedin.com/in/harijaona-rajaonson/"
        >
          Hari</a
        >
        ,
      </p>
      <p className="right">
        Copyright © {{ new Date().getFullYear() }} Singer France, Tous droits
        réservés.
      </p>
    </div>
  </section>
</template>

<script>
/*
	Entry point for vue components
*/

export default {
  name: "Copyright",
};
</script>

<style lang="css">
.copyright {
  background: #e30044;
}

.container-copyright {
  display: flex;
  justify-content: center;
}

.left,
.right {
  margin: 0;
  padding: 10px 0;
  color: white;
}

.left {
  padding-right: 10px;
}

.right {
  padding-left: 10px;
}

.link {
  color: rgb(200, 200, 200);
  font-weight: bold;
}

.link:hover {
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 2px white;
}
</style>
