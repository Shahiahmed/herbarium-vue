<style scoped>
.p-dropdown {
  border: 1px solid #609966;
  border-radius: 0;
  background-color: rgb(255, 255, 255);
}
.p-dropdown-items-wrapper {
  border-radius: 0;
}
.p-dropdown-panel {
  border-radius: 0px !important;
}
.p-dropdown-items {
  padding: 0;
}
.p-inputtext {
  padding: 0;
}
</style>
<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedLanguage"
      :options="languages"
      optionLabel="name"
      class="w-full md:w-6rem"
      @change="changeLanguage"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <img
            :alt="slotProps.value.label"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`mr-2  fi fi-${slotProps.value.code.toLowerCase()}`"
            style="width: 18px"
          />

          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <img
            :alt="slotProps.option.label"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`mr-2 fi fi-${slotProps.option.code.toLowerCase()}`"
            style="width: 18px"
          />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: { name: "RU", code: "ru", value: "ru" },
      languages: [
        { name: "KZ", code: "kz", value: "kz" },
        { name: "RU", code: "ru", value: "ru" },

        { name: "EN", code: "gb", value: "en" },
      ],
    };
  },
  methods: {
    changeLanguage() {
      // Здесь вы можете установить текущий язык в соответствии с выбранным значением
      this.$i18n.locale = this.selectedLanguage.value;
    },
  },
};
</script>
