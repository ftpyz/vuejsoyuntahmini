<template>
  <div>
    <div v-if="anaDurum">
      1 ile 10 arasındaki aklımdan tuttuğum sayıyı tahmin etmeye ne dersin.
      <br />
      <input type="number" v-model="KullanicininTahmini" />
      <br />
      Tahmin Sayisi:{{ KacinciTahmin }}
      <button @click="TahminEt">Tahmin Yap</button>
      <button @click="YenidenBasla">Yeniden Başla</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Oyun",
  props: ["anaDurum"],
  data: () => {
    return {
      KullanicininTahmini: "",
      AklimdakiSayi: Math.floor(Math.random() * 10) + 1,
      KacinciTahmin: 0
    };
  },
  methods: {
    YenidenBasla() {
      this.$emit("oyunDurumu", false);
    },
    TahminEt() {
      this.KacinciTahmin++;
      if (parseInt(this.KullanicininTahmini) == this.AklimdakiSayi) {
        alert("Tebrikler!!");
      } else {
        alert("Çok yaklaştın tekrar denemelisin");
      }
    }
  }
};
</script>
