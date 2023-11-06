<template>
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
</template>

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
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
