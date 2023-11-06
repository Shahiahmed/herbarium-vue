<template>
  <div class="card">
    <h3 class="">
      {{ $t("home.latestNews") }}<i class="pi pi-play text-green-700"></i>
    </h3>
    <Accordion :activeIndex="0">
      <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p>{{ tab.content }}</p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "News title 1", content: "Content 1" },
        { title: "News title 2", content: "Content 2" },
        { title: "News title 3", content: "Content 3" },
      ],
    };
  },
};
</script>
