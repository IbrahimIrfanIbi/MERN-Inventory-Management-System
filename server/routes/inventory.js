const express = require('express');
const router = express.Router();
const { addInventory, updateInventory, deleteInventory, getInventories} = require('../controllers/inventoryController');

// @route  GET api/inventory
// @desc   Get all inventories
router.get('/inventory', getInventories);

// @route  POST api/inventory
// @desc   Add new inventory
router.post('/inventory', addInventory);

router.put('/inventory/:id', updateInventory);

// @route  DELETE api/inventory/:id
// @desc   Delete an inventory item
router.delete('/inventory/:id', deleteInventory);

module.exports = router;
