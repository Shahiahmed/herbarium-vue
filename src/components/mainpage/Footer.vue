<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <footer>
    <div class="container my-3">
      <div class="grid">
        <div class="md:col-2">
          <div>
            <ul>
              Pages
              <li>Home</li>
              <li>Catalogue</li>
              <li>Herbarium</li>
              <li>Seeds</li>
            </ul>
          </div>
        </div>
        <div class="md:col-2">
          <div>
            <ul>
              More info
              <li>About us</li>
              <li>News</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div class="md:col-3">
          <div>
            <ul>
              Сontact us
              <li>+7(702) 071 64 94</li>
              <li>example@gmail.com</li>

              <li>Korgalzhyn Highway 13/5, Astana , Kazakhstan</li>
            </ul>
          </div>
        </div>

        <div class="md:col-5">
          <div class="flex justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2740.9097336111827!2d71.3824223328507!3d51.14676221770993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245875cff057751%3A0x8ce210edda419c93!2zTmF0aW9uYWwgY2VudGVyIGZvciBiaW90ZWNobm9sb2d5ICjQndCw0YbQuNC-0L3QsNC70YzQvdGL0Lkg0YbQtdC90YLRgCDQsdC40L7RgtC10YXQvdC-0LvQvtCz0LjQuCk!5e0!3m2!1sru!2skz!4v1694525460487!5m2!1sru!2skz"
              height="250"
              width="350"
              style="border: 2px white solid"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Divider />
      <div class="flex justify-content-center">
        <small data-v-fe33588b="" class="text-center"
          >©<a
            class="text-white"
            data-v-fe33588b=""
            href="https://www.biocenter.kz/"
            target="_blank"
          >
            National Center for Biotechnology</a
          ><br data-v-fe33588b="" />
          2023. All rights reserved.</small
        >
      </div>
    </div>
  </footer>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dongle&family=Montserrat:wght@500&family=Open+Sans&family=Pacifico&family=Roboto+Slab&display=swap");
footer {
  background-color: #609966;
  color: white;

  -webkit-box-shadow: 0px -1px 7px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px -1px 7px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px -1px 7px 1px rgba(34, 60, 80, 0.2);
  position: relative;
}
</style>
