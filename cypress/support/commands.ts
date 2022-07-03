import "cypress-localstorage-commands";

import { validateCartItems, appLogin } from "./custom-commands";

Cypress.Commands.add('validateCartItems', validateCartItems)
Cypress.Commands.add('appLogin', appLogin);