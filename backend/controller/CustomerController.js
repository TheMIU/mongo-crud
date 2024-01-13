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

    // find (get one)  
    findCustomer: async function (req, res, next) {
        try {
            const customerId = req.params.id;
            const customer = await Customer.find({ id: customerId });
            res.status(200).json(customer);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    // get all  
    allCustomers: async function (req, res, next) {
        try {
            const findAll = await Customer.find();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    // update
    updateCustomer: async function (req, res, next) {
        try {
            const cusId = req.params.id;
            const customerData = req.body;

            const customer = await Customer.findOneAndUpdate({ id: cusId }, customerData, { new: true }); // updated product return true 
            res.status(200).json(customer);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },
}

module.exports = customerController;