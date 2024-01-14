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
            res.status(500).json({"error":"add failed"});
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
            res.status(500).json(error);
        }
    },

    // get all  
    allCustomers: async function (req, res, next) {
        try {
            const findAll = await Customer.find();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },

    // update
    updateCustomer: async function (req, res, next) {
        try {
            const cusId = req.params.id;
            const customerData = req.body;

            const updatedCustomer = await Customer.findOneAndUpdate({ id: cusId }, customerData, { new: true }); // updated one return true 
            if (!updatedCustomer) {
                return res.status(404).json({ error: 'not found' });
            }
            res.status(200).json(updatedCustomer);
            
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },

    // delete
    deleteCustomer: async function (req, res, next) {
        try {
            const customerId = req.params.id;
            const result = await Customer.deleteOne({ id: customerId });

            if (result.deletedCount == 0) {
                return res.status(404).json({ error: 'not found' });
            }
            res.status(200).json({ message: 'deleted success' });

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
}

module.exports = customerController;