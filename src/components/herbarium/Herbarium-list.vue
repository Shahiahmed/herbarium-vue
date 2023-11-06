<template>
  <div class="card">
    <div v-if="loading">Loading...</div>
    <DataTable v-else :value="species" tableStyle="w-12rem">
      <Column
        field="taxonID"
        header="taxonID"
        sortable
        style=""
        class="hidden md:block"
      ></Column>
      <Column
        field="scientificName"
        header="Scientific Name"
        sortable
        style=""
        class=""
      ></Column>
      <Column
        field="canonicalName"
        header="canonicalName"
        sortable
        style=""
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      species: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get("https://api.gbif.org/v1/species")
      .then((response) => {
        this.species = response.data.results;
      })
      .catch((error) => {
        console.error("Error fetching data from GBIF API:", error);
      })
      .finally(() => (this.loading = false));
  },
};
</script>
