<style></style>
<template>
  <div class="h-5rem page-title-background">
    <div class="container page-title">
      <div class="">{{ $t("catalogue.catalogue") }}</div>
    </div>
  </div>
  <div class="container">
    <main class="grid flex-column md:flex-row">
      <div class="col md:col-4">
        <div>
          <h4>{{ $t("catalogue.search") }}</h4>
          <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
              <RadioButton
                v-model="ingredient"
                inputId="ingredient1"
                name="pizza"
                value="family"
                selected
              />
              <label for="ingredient1" class="ml-2">{{
                $t("catalogue.family")
              }}</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton
                v-model="ingredient"
                inputId="ingredient2"
                name="pizza"
                value="genus"
              />
              <label for="ingredient2" class="ml-2">{{
                $t("catalogue.genus")
              }}</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton
                v-model="ingredient"
                inputId="ingredient3"
                name="pizza"
                value="species"
              />
              <label for="ingredient3" class="ml-2">{{
                $t("catalogue.species")
              }}</label>
            </div>
          </div>
          <div class="p-2">
            <Treeview />
          </div>
        </div>
      </div>
      <div class="col md:col-8">Info</div>
    </main>
  </div>
</template>

<script>
import Treeview from "../components/catalogue/Treeview.vue";
export default {
  components: {
    Treeview,
  },
  data() {
    return {
      ingredient: "",
    };
  },
};
</script>
