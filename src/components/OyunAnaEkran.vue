<template>
  <div id="inspire">
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="6" md="6" xm="12" xs="12">
          <v-card>
            <v-card-title>{{
              filterDenemesi | uppercase | truncate(5)
            }}</v-card-title>
            <v-card-text>
              <v-select
                :items="dovizKurlari"
                label="Döviz Kur Seçimi"
                v-model="secilenDoviz"
                @change="TemizlikZamani"
              ></v-select>
              <v-btn
                :disabled="!secilenDoviz"
                block
                color="primary"
                @click="DovizBilgileriniGetir"
                >Getir</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xl="12" lg="6" md="6" xm="12">
          <v-card v-if="ilgiliDoviz">
            <v-card-title>Döviz Bilgileri</v-card-title>
            <v-card-text
              >{{ ilgiliDoviz | currency("$") }}
              {{ tel | telefonNumarasi }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  methods: {
    DovizBilgileriniGetir() {
      this.$http
        .get("https://www.doviz.gen.tr/doviz_json.asp")
        .then(response => {
          return response.json();
        })
        .then(veri => {
          this.dovizBilgileri = veri;
        });

      console.log(this.secilenDoviz);
    },
    TemizlikZamani() {
      this.dovizBilgileri = {};
    }
  },
  computed: {
    ilgiliDoviz() {
      if (this.secilenDoviz) {
        return this.dovizBilgileri[this.secilenDoviz];
      }
      //console.log(this.dovizBilgileri.keys());

      return false;
    }
  },
  filters: {
    telefonNumarasi(deger) {
      return deger
        .replace(/[^0-9]/g, "")
        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
  },
  data: () => ({
    drawer: false,
    filterDenemesi: "fuat poyraz",
    secilenDoviz: false,
    tel: "05415989907",
    oyunBilgisiKaranlikMi: false,
    dovizBilgileri: {},
    dovizKurlari: [
      {
        text: "Dolar",
        value: "dolar"
      },
      {
        text: "Euro",
        value: "euro"
      }
    ]
  })
};
</script>
