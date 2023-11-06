<script>
export default {
  data() {
    return {
      imageList: [
        "/exampleData/ABG000001.jpg",
        "/exampleData/ABG000002.jpg",
        "/exampleData/ABG000003.jpg",
        "/exampleData/ABG000004.jpg",

        "/exampleData/ABG000005.jpg",
        "/exampleData/ABG000006.jpg",
        "/exampleData/ABG000007.jpg",
        "/exampleData/ABG000008.jpg",
        "/exampleData/ABG000009.jpg",
        "/exampleData/ABG000010.jpg",
        "/exampleData/ABG000011.jpg",
        "/exampleData/ABG000012.jpg",
        "/exampleData/ABG000013.jpg",
        "/exampleData/ABG000014.jpg",
        "/exampleData/ABG000015.jpg",
        // Add more image URLs as needed
      ],
      value: "",
    };
  },
};
</script>
<template>
  <div class="h-5rem page-title-background">
    <div class="container page-title">
      <div class="">{{ $t("seeds.seeds") }}</div>
    </div>
  </div>
  <div class="container-herb">
    <main class="grid flex-column md:flex-row">
      <div class="col md:col-4 pr-4">
        <h4>{{ $t("seeds.filter") }}</h4>

        <div class="input-group">
          <InputText
            type="text"
            v-model="value"
            :placeholder="$t('seeds.name')"
            class="w-full"
          />
          <div class="flex gap-1 mt-2">
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('seeds.family')"
              class="w-full"
            />
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('seeds.genus')"
              class="w-full"
            />
          </div>
          <div class="flex gap-1 mt-2">
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('seeds.country')"
              class="w-full"
            />
            <InputText
              type="text"
              v-model="value"
              :placeholder="$t('seeds.place')"
              class="w-full"
            />
          </div>
        </div>
        <div>
          <div class="flex justify-content-center gap-3 my-5">
            <Button
              :label="$t('seeds.clear')"
              severity="danger"
              outlined
              icon="pi pi-trash"
            /><Button
              :label="$t('seeds.search')"
              severity="success"
              icon="pi pi-search"
            />
          </div>
        </div>
      </div>

      <div class="col md:col-8 mt-5">
        <div class="grid">
          <div
            v-for="(image, index) in imageList"
            :key="index"
            class="xl:col-4 md:col-6 col-12"
          >
            <div class="border-1 flex p-2">
              <img :src="image" alt="Image" class="w-5rem" />
              <div class="pl-2">
                <h5>Name</h5>
                <p>info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style></style>
