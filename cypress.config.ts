import { defineConfig } from "cypress";

// import { getCustomerInfo } from "./cypress/plugins/faker";
import { faker } from "@faker-js/faker";

faker.setLocale("en");

export default defineConfig({
  projectId: "j1kded",
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    setupNodeEvents(on) {
      on("task", {
        getCustomerInfo() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            zipCode: faker.address.zipCode("#####`"),
          };
        },
      });
    },
  },
});
