<script>
import LatestNews from "../components/mainpage/LatestNews.vue";
export default {
  components: {
    LatestNews,
  },
  data() {
    return {
      value: null,
    };
  },
};
</script>
<template>
  <div class="main-search background-search">
    <div
      class="container h-15rem flex justify-content-center align-items-center"
    >
      <div class="">
        <div class="card flex justify-content-center">
          <span class="p-float-label">
            <InputText id="main-search-input" v-model="value" class="w-18rem" />
            <label for="main-search-input">{{
              $t("home.mainSearchPlaceholder")
            }}</label>
          </span>

          <Button :label="$t('home.mainSearch')" severity="success"></Button>
        </div>
      </div>
    </div>
  </div>
  <div class="main-page-info">
    <div class="container p-5">
      <div class="flex flex-column md:flex-row gap-2">
        <div class="md:col-4" style="border-right: 1px black solid">
          <div class="flex">
            <img class="data1" src="/images/data-image/photos.png" alt="" />
            <div class="flex flex-column pl-2 gap-2">
              <h5 class="m-0">{{ $t("home.dataPhoto") }}</h5>
              <p class="m-0">5000</p>
            </div>
          </div>
        </div>
        <div class="md:col-4" style="border-right: 1px black solid">
          <div class="flex">
            <img class="data1" src="/images/data-image/spacemens.png" alt="" />
            <div class="flex flex-column pl-2 gap-2">
              <h5 class="m-0">{{ $t("home.dataSpecimens") }}</h5>
              <p class="m-0">5000</p>
            </div>
          </div>
        </div>
        <div class="md:col-4" style="border-right: 1px black solid">
          <div class="flex">
            <img class="data1" src="/images/data-image/types.png" alt="" />
            <div class="flex flex-column pl-2 gap-2">
              <h5 class="m-0">{{ $t("home.dataTypes") }}</h5>
              <p class="m-0">5000</p>
            </div>
          </div>
        </div>
      </div>

      <div class="news py-5 md:pr-4">
        <div class="md:w-6">
          <LatestNews />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.col-4 div {
  border-right: 1px black solid;
}
.data1 {
  height: 50px;
}
.background-search {
  z-index: 1;
  background-image: url("/images/back-search2.jpg");
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center;
}
.main-page-info {
  -webkit-box-shadow: 0px -3px 7px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px -3px 7px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px -3px 7px 2px rgba(34, 60, 80, 0.2);
  position: relative;
}
.p-inputtext {
  border-radius: 5px 0 0 5px;
}
.p-float-label > label {
  color: rgb(198, 210, 203);
}

/* Search button */
.p-button {
  background-color: #609966;
  z-index: 1;
  border-radius: 0 5px 5px 0;
  border-top: 1px white solid;
  border-right: 1px white solid;
  border-bottom: 1px white solid;
}
</style>
