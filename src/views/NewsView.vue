<template>
  <div class="h-5rem page-title-background">
    <div class="container page-title">
      <div class="">{{ $t("news.news") }}</div>
    </div>
  </div>

  <div class="container py-3">
    <div class="flex flex-column row-gap-3 py-3">
      <Panel header="News title" v-for="n in 5">
        <template #icons> <p>20.10.2023</p> </template>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="flex justify-content-end my-1">
          <Button :label="$t('news.learn')" severity="success" outlined />
        </div>
      </Panel>
    </div>
  </div>
</template>
