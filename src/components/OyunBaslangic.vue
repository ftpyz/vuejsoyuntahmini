<template>
  <div>
    <div v-if="!AdSoyadBaslangic">
      <p>Merhaba; Sayı tahmin oyunumuza hoş geldiniz. Lütfen başlamak için ad ve soyadınızı giriniz</p>
      <input type="text" v-model="AdSoyad" />
      <button v-if="AdSoyad.length >=3" @click="OyunaBasla">Oyuna Başla</button>
    </div>
    <div
      v-else
    >Merhaba; {{AdSoyadBaslangic}} oyunumuza hoş geldiniz. Sayı tahmininde bulunmaya hazırmısın!</div>
  </div>
</template>
<script>
export default {
  name: "OyunBaslangici",
  data: () => {
    return {
      AdSoyad: "",
      AdSoyadBaslangic: null
    };
  },
  methods: {
    OyunaBasla() {
      this.AdSoyadBaslangic = this.AdSoyad;
      this.$emit("oyunDurumu", true);
    }
  }
};
</script>