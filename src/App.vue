<style scoped>
.menubar {
  padding: 0;
}

nav {
  background-color: rgb(96, 153, 102);
  z-index: 2;
  position: relative;
  -webkit-box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.22);
  -moz-box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.22);
  box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.22);
}

a {
  text-decoration: none;
}
.ScrollTop {
  background-color: rgb(176, 201, 173);
  border-radius: 50%;
  border: 1px white solid;
}
.ScrollTop:hover {
  background-color: rgb(78, 179, 67);
}
</style>

<template class="wrapper">
  <ScrollTop class="ScrollTop" />
  <header>
    <div class="container">
      <div class="flex justify-content-between align-items-center">
        <div><img src="/logo-main.png" alt="Logo" class="w-10rem my-3" /></div>
        <div class="flex gap-2">
          <router-link to="/login"
            ><Button label="Login" severity="success" outlined>{{
              $t("login.login")
            }}</Button>
          </router-link>
          <router-link to="/register"
            ><Button label="Sign Up" severity="success">
              {{ $t("signup.signup") }}</Button
            ></router-link
          >
        </div>
      </div>
    </div>
  </header>

  <nav>
    <div class="card relative z-2">
      <div class="container">
        <Menubar :model="items" class="menubar">
          <template #item="{ label, item, props, root }">
            <router-link
              v-if="item.route"
              v-slot="routerProps"
              :to="item.route"
            >
              <a :href="routerProps.href" v-bind="props.action">
                <font-awesome-icon :icon="['fas', item.icon]" class="mr-2" />
                <span v-bind="props.label">{{ $t(label) }}</span>
                <!-- Получение перевода здесь -->
              </a>
            </router-link>
            <a
              v-else
              :href="item.url"
              :target="item.target"
              v-bind="props.action"
            >
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ $t(label) }}</span>
              <!-- Получение перевода здесь -->
              <span
                :class="[
                  root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right',
                ]"
                v-bind="props.submenuicon"
              />
            </a>
          </template>
          <template #end>
            <div class="flex">
              <!-- <SwitchThemes @theme-change="changeTheme" /> -->
              <Language />
            </div>
          </template>
        </Menubar>
      </div>
    </div>
  </nav>
  <!-- Navbar ///start -->

  <!-- Main // start -->
  <main>
    <RouterView />
  </main>
  <!-- Footer// start -->

  <Footer />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Language from "./components/mainpage/Language.vue";
import Footer from "./components/mainpage/Footer.vue";
import SwitchThemes from "./components/mainpage/SwitchThemes.vue";

export default {
  components: {
    Language,
    Footer,
    SwitchThemes,
  },
  methods: {
    changeTheme(selectedTheme) {
      const themeLink = document.getElementById("theme-link");
      if (themeLink) {
        themeLink.href = `./src/assets/themes/${selectedTheme}.css`;
      }
    },
  },
  data() {
    return {
      items: [
        {
          label: "home.home",
          icon: "house",
          route: "/",
        },
        {
          label: "catalogue.catalogue",
          icon: "book",
          route: "/catalogue",
        },
        {
          label: "specimens.specimens",
          icon: "pi pi-database",
          items: [
            {
              label: "herbarium.herbarium",
              icon: "leaf",
              route: "/herbarium",
            },
            {
              label: "seeds.seeds",
              icon: "seedling",
              route: "/seeds",
            },
          ],
        },
        {
          label: "news.news",
          icon: "newspaper",
          route: "/news",
        },
        {
          label: "about.about",
          icon: "users",
          route: "/about",
        },
      ],
    };
  },
};
</script>
