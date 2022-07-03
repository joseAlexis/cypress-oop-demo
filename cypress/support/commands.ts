import "cypress-localstorage-commands";

import { validateCartItems } from "./validateCartItems";

Cypress.Commands.add('validateCartItems', validateCartItems);