<template>
  <div>deneme mesajir</div>
</template>
<script>
export default {
  name: "deneme",
  beforeRouteLeave(to, from, next) {
    console.log(to);
    console.log(from);
    next();
  }
};
</script>
