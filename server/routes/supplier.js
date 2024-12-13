const express = require('express');
const router = express.Router();
const { addSupplier, updateSupplier, deleteSupplier, getSuppliers } = require('../controllers/supplierController');

// @route  GET api/supplier
// @desc   Get all suppliers
router.get('/supplier', getSuppliers);

// @route  POST api/supplier
// @desc   Add new supplier
router.post('/supplier', addSupplier);

// @route  PUT api/supplier/:id
// @desc   Update a supplier
router.put('/supplier/:id', updateSupplier);

// @route  DELETE api/supplier/:id
// @desc   Delete a supplier
router.delete('/supplier/:id', deleteSupplier);

module.exports = router;
