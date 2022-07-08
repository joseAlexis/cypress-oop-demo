const { defineConfig } = require("cypress");

// import { getCustomerInfo } from "./cypress/plugins/faker";
import { faker } from "@faker-js/faker";

faker.setLocale('en');

export default defineConfig({
  projectId: 'axhrgu',
    e2e: {
        baseUrl: "https://www.saucedemo.com",
        watchForFileChanges: false,
        specPattern: "**/*.spec.ts",
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            on("task", {
                "getCustomerInfo"() {
                    return {
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        zipCode: faker.address.zipCode('#####`')
                    }
                }
            });
        }
    }
})