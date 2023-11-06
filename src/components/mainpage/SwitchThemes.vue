<template>
  <div>
    <select id="theme-select" v-model="selectedTheme" @change="changeTheme">
      <option value="lara-light-theme">Lara Light Theme</option>
      <option value="soho-light">Soho Light</option>

      <option value="bootstrap">bootstrap</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTheme: "lara-light-theme", // Выбранная тема по умолчанию
    };
  },
  methods: {
    changeTheme() {
      this.$emit("theme-change", this.selectedTheme);
    },
  },
};
</script>
