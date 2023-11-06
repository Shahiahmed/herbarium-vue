<script>
import HerbariumCard from "../components/herbarium/Herbarium-card.vue";
import HerbariumList from "../components/herbarium/Herbarium-list.vue";
import Statistic from "../components/herbarium/Statistic.vue";

export default {
  data() {
    return {
      hasFlower: false,
      hasFruit: false,
      value: "",
    };
  },
  components: { Statistic, HerbariumList, HerbariumCard },
};
</script>
<template>
  <div class="h-5rem page-title-background">
    <div class="container page-title">
      <div class="">{{ $t("herbarium.herbarium") }}</div>
    </div>
  </div>
  <div class="container-herb">
    <main class="grid flex-column md:flex-row">
      <div class="col md:col-4 pr-4">
        <h4>{{ $t("herbarium.filter") }}</h4>

        <div class="input-group">
          <InputText
            type="text"
            v-model="value"
            :placeholder="$t('herbarium.name')"
            class="w-full"
          />
          <div class="flex gap-1 mt-2">
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('herbarium.family')"
              class="w-full"
            />
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('herbarium.genus')"
              class="w-full"
            />
          </div>
          <div class="flex gap-1 mt-2">
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('herbarium.country')"
              class="w-full"
            />
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('herbarium.place')"
              class="w-full"
            />
          </div>
          <div class="flex gap-1 mt-2">
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('herbarium.collector')"
              class="w-full"
            />
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('herbarium.collectedYear')"
              class="w-full"
            />
          </div>
        </div>
        <div>
          <div
            class="flex justify-content-center gap-3 mt-3 align-items-center"
          >
            <InputSwitch id="switch1" v-model="hasFlower" />
            <label for="switch1">{{ $t("herbarium.hasFlower") }}</label>
            <InputSwitch id="switch2" v-model="hasFruit" />
            <label for="switch2">{{ $t("herbarium.hasFruit") }}</label>
          </div>
          <div class="flex justify-content-center gap-3 my-5">
            <Button
              :label="$t('herbarium.clear')"
              severity="danger"
              outlined
              icon="pi pi-trash"
            /><Button
              :label="$t('herbarium.search')"
              severity="success"
              icon="pi pi-search"
            />
          </div>
        </div>
      </div>
      <div class="col md:col-8">
        <div class="card">
          <TabView class="tabview-custom">
            <TabPanel>
              <template #header>
                <i class="pi pi-list mr-2"></i>
                <span>{{ $t("herbarium.list") }} </span>
              </template>
              <p>
                <HerbariumList />
              </p>
            </TabPanel>
            <TabPanel>
              <template #header>
                <i class="pi pi-th-large mr-2"></i>
                <span>{{ $t("herbarium.card") }}</span>
              </template>
              <p>
                <HerbariumCard />
              </p>
            </TabPanel>
            <TabPanel>
              <template #header>
                <i class="pi pi-chart-bar mr-2"></i>
                <span>{{ $t("herbarium.statistics") }}</span>
              </template>
              <p>
                <Statistic />
              </p>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </main>
  </div>
</template>
<style>
.p-button {
  border-radius: 0;
}
</style>
