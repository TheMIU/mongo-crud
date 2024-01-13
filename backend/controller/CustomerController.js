const Customer = require('../model/Customer');

const customerController = {
    // add 
    addCustomer: async function (req, res, next) {
        try {
            const customerData = req.body;
            const customer = await Customer.create(customerData);
            res.status(200).json(customer);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },
}

module.exports = customerController;