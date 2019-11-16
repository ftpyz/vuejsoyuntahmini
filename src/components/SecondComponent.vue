<template>
  <div>
    {{ sayac }}
    <v-btn @click="arttir">Arttir</v-btn>
  </div>
</template>
<script>
export default {
  name: "SecondComponent",
  data: () => {
    return {
      sayac: 0
    };
  },
  methods: {
    arttir() {
      this.$store.commit("sayaciArttir");
    }
  }
};
</script>
