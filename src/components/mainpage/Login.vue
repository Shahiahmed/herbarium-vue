<script>
export default {
  data() {
    return { checked1: true };
  },
};
</script>
<template>
  <div class="container">
    <div class="flex justify-content-center py-5">
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-5">
        <div class="text-center mb-5">
          <div class="text-900 text-3xl font-medium mb-3">
            {{ $t("login.title") }}
          </div>
        </div>

        <div>
          <label for="email1" class="block text-900 font-medium mb-2">{{
            $t("login.username")
          }}</label>
          <InputText
            id="email1"
            type="text"
            placeholder="Username"
            class="w-full mb-3"
          />

          <label for="password1" class="block text-900 font-medium mb-2">{{
            $t("login.password")
          }}</label>
          <InputText
            id="password1"
            type="password"
            placeholder="Password"
            class="w-full mb-3"
          />

          <Button
            :label="$t('login.signin')"
            severity="success"
            icon="pi pi-user"
            class="w-full mt-5"
          >
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
