<template>
  <div>
    <v-text-field label="sayi" :value="sayac" />
  </div>
</template>
<script>
export default {
  name: "FirstComponent",
  computed: {
    sayac() {
      return this.$store.getters.getirSayac;
    }
  }
};
</script>
