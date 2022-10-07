import { createApp } from "vue";
import DashboardApp from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(DashboardApp);

  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dashboard-dev-root");

  if (el) mount(el);
}

export { mount };
