const express = require("express");
const router = express.Router();

const Item = require('../controllers/item');

router.get('/', Item.teste);
router.get('/item/listar', Item.listar);
router.post('/item/criar', Item.criar);
router.delete('/item/excluir/:id', Item.excluir);

module.exports = router