import { createApp } from "vue";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import App from "./App.vue";
import CustomMultiSelect from "./components/customSelect.vue";

createApp(App)
  .use(
    plugin,
    defaultConfig({
      theme: "genesis",
      inputs: {
        customMultiSelect: createInput(CustomMultiSelect, {
          props: ["options", "multiple", "placeholder"]
        })
      }
    })
  )
  .mount("#app");
