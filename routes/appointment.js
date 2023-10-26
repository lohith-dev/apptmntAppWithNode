const path = require('path');

const express = require('express');

const appntController = require('../controllers/appntcontoler.js');

const router = express.Router();

// /admin/add-product => GET
router.get('/', appntController.getappntdata);

router.post('/', appntController.postAppntdata);

router.put('/',appntController.updAppntdata)

router.delete('/:id', appntController.deleteAppntdata);



// /admin/products => GET




module.exports = router;
