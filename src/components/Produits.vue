<template>
  <div class="service">
    <div class="card">
      <div class="section-title">
        <div class="vertical-bar"></div>
        <h2 class="title">Nos machines à coudre!</h2>
      </div>

      <p class="section-paragraph">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
        sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
        ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur.
      </p>
      <div class="space"></div>

      <div class="product-card">
        <input class="search" type="text" placeholder="Rechercher ..." />

        <div class="space"></div>

        <div class="product-content">
          <div class="content">
            <MACMeca
              v-for="item in macmeca"
              :key="item.id"
              :marque="item.marque"
              :cover="item.cover"
            />

            <MACElec
              v-for="item in macelec"
              :key="item.id"
              :marque="item.marque"
              :cover="item.cover"
            />

            <Brodeuse
              v-for="item in brodeuse"
              :key="item.id"
              :marque="item.marque"
              :cover="item.cover"
            />

            <Surjeteuse
              v-for="item in surjeteuse"
              :key="item.id"
              :marque="item.marque"
              :cover="item.cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
	Entry point for vue components
*/

import MACMeca from "./MACMeca.vue";
import MACElec from "./MACElec.vue";
import Brodeuse from "./Brodeuse.vue";
import Surjeteuse from "./Surjeteuse.vue";

export default {
  name: "Produits",
  components: {
    MACMeca,
    MACElec,
    Brodeuse,
    Surjeteuse,
  },
  data() {
    return {
      shown: 4,
      macmeca: [
        {
          id: 1,
          marque: "Singer : Madame 5",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919281/produits/mecanique/Madam5-boutons_f0eofj.jpg",
        },
        {
          id: 2,

          marque: "Tradition-2250-bleu",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919383/produits/mecanique/trdition2250blue_zt1jyb.jpg",
        },
        {
          id: 3,

          marque: "Mademoiselle-2105",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919507/produits/mecanique/mademoiselle-2105-singer_owxmkh.jpg",
        },
        {
          id: 4,
          marque: "M2105",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919508/produits/mecanique/M2105_k5gbnx.jpg",
        },
      ],

      macelec: [
        {
          id: 5,
          marque: "Futura-200 tablette",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639917472/produits/electronique/singer-futura200-tablette_i49fm0.jpg",
        },
        {
          id: 6,

          marque: "Featherweight",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639917605/produits/electronique/Face-web_rbs3l2.jpg",
        },
        {
          id: 7,

          marque: "Experience-400",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639917679/produits/electronique/Experience-400_dncq1h.png",
        },
        {
          id: 8,
          marque: "Stylist-4085",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639917726/produits/electronique/Stylist-4085-2_h9zgxb.png",
        },
      ],

      brodeuse: [
        {
          id: 9,
          marque: "Brodeuse-EM9305",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919765/produits/brodeuse/brodeuse_EM9305_sp3lzo_vgbn9s.png",
        },
        {
          id: 10,
          marque: "Brodeuse-EM200",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919894/produits/brodeuse/EM200-2_zees6g.jpg",
        },
        {
          id: 11,
          marque: "Brodeuse-SE300-4",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919984/produits/brodeuse/SE300-4_mu6ubm.jpg",
        },
        {
          id: 12,
          marque: "Brodeuse-SE300-5",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639919984/produits/brodeuse/SE300-5_ce9glf.jpg",
        },
      ],
      surjeteuse: [
        {
          id: 13,
          marque: "Surjeteuse-HD4055",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639918251/produits/surjeteuse/HD405S-ambiance-old_g9qkpo.jpg",
        },
        {
          id: 14,
          marque: "Surjeteuse-S0705",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639918481/produits/surjeteuse/surjeteuse_S0705_cvleoi_dji440.png",
        },
        {
          id: 15,
          marque: "Surjeteuse-16T968",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639918689/produits/surjeteuse/14T968_av7up7.jpg",
        },
        {
          id: 16,
          marque: "Surjeteuse-S0105-angel2",
          cover:
            "https://res.cloudinary.com/dctlti6fj/image/upload/v1639918020/produits/surjeteuse/S0105-angle3-old_s05pvy.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="css">
.search {
  padding: 10px 20px;
  border: none;
  background: rgb(245, 245, 245);
}

.search,
.search::-webkit-input-placeholder {
  font-size: 12pt;
}

.product-card {
  background: white;
  box-shadow: 0px 0px 10px rgb(200, 200, 200);
  padding: 40px 70px 40px 70px;
}

.space {
  margin-top: 20px;
  margin-bottom: 2px;
}

.product-content {
  padding-top: 10px;
  width: 100%;
}
.content {
  flex-wrap: wrap;
  display: flex;
  column-gap: 8px;
  row-gap: 40px;
  justify-content: space-between;
}
</style>
