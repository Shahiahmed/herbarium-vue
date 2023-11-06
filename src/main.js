import "./assets/main.css";
import "primeflex/primeflex.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

// import "../src/assets/themes/lara-light-theme.css";
// import "../src/assets/themes/soho-light.css";
import i18n from "./i18n";
// Css files
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
//
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import ScrollTop from "primevue/scrolltop";
import Tree from "primevue/tree";
import SelectButton from "primevue/selectbutton";
import Chart from "primevue/chart";
import Divider from "primevue/divider";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import RadioButton from "primevue/radiobutton";
import InputSwitch from "primevue/inputswitch";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import VirtualScroller from "primevue/virtualscroller";
import Panel from "primevue/panel";
// Table
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
// Components
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

// i18n multilanguage library
library.add(
  faUserSecret,
  faLeaf,
  faSeedling,
  faHouse,
  faNewspaper,
  faUsers,
  faBook,
  faLanguage
);
const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(i18n);
//
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("SelectButton", SelectButton);
app.component("InputText", InputText);
app.component("Menubar", Menubar);
app.component("Dropdown", Dropdown);
app.component("Button", Button);
app.component("ScrollTop", ScrollTop);
app.component("Tree", Tree);
app.component("Chart", Chart);
app.component("Divider", Divider);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("RadioButton", RadioButton);
app.component("InputSwitch", InputSwitch);
app.component("TabPanel", TabPanel);
app.component("TabView", TabView);
app.component("VirtualScroller", VirtualScroller);
app.component("Panel", Panel);
//
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.mount("#app");
