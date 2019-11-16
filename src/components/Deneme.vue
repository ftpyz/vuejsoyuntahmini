<template>
  <div><SecondComponent /> <FirstComponent /></div>
</template>
<script>
import SecondComponent from "./SecondComponent";
import FirstComponent from "./FirstComponent";
export default {
  name: "deneme",
  components: {
    SecondComponent,
    FirstComponent
  }
};
</script>
