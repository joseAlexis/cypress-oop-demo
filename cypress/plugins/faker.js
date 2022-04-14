const { faker } = require("@faker-js/faker");

const getCustomerInfo = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        zipCode: faker.address.zipCode()
    }
}

module.exports.getCustomerInfo = getCustomerInfo;