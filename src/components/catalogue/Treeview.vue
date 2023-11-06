<style scoped></style>
<template>
  <div class="card flex justify-content-center my-5">
    <Tree :value="nodes" :filter="true" class="w-full md:w-30rem">
      <template #default="slotProps">
        <b>{{ slotProps.node.label }}</b>
      </template>
    </Tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes: [
        {
          key: "0",
          label: "Introduction",
          children: [
            {
              key: "0-0",
              label: "What is Vue.js?",
              data: "https://vuejs.org/guide/introduction.html#what-is-vue",
              type: "url",
            },
            {
              key: "0-1",
              label: "Quick Start",
              data: "https://vuejs.org/guide/quick-start.html#quick-start",
              type: "url",
              children: {
                key: "0-1",
                label: "Quick Start",
                data: "https://vuejs.org/guide/quick-start.html#quick-start",
                type: "url",
              },
            },
            {
              key: "0-2",
              label: "Creating a Vue Application",
              data: "https://vuejs.org/guide/essentials/application.html#creating-a-vue-application",
              type: "url",
            },
            {
              key: "0-3",
              label: "Conditionals Rendering",
              data: "https://vuejs.org/guide/essentials/conditional.html#conditional-rendering",
              type: "url",
            },
          ],
        },
        {
          key: "1",
          label: "Components In-Depth",
          children: [
            {
              key: "1-0",
              label: "Component Registration",
              data: "https://vuejs.org/guide/components/registration.html#component-registration",
              type: "url",
            },
            {
              key: "1-1",
              label: "Props",
              data: "https://vuejs.org/guide/components/props.html#props",
              type: "url",
            },
            {
              key: "1-2",
              label: "Components Events",
              data: "https://vuejs.org/guide/components/events.html#component-events",
              type: "url",
            },
            {
              key: "1-3",
              label: "Slots",
              data: "https://vuejs.org/guide/components/slots.html#slots",
              type: "url",
            },
          ],
        },
      ],
    };
  },
};
</script>
