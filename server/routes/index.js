var express = require('express');
var router = express.Router();
var base = process.env.PWD;
var mates = require(base + '/controllers/mates');
var transactions = require(base + '/controllers/transactions');

router.get('/mates', mates.getMates);
router.get('/mate/:id', mates.getMate);
router.post('/mate/create', mates.createMate);
router.put('/mate/:id', mates.updateMate);
router.delete('/mate/:id', mates.deleteMate);

router.get('/transactions', transactions.getTransactions);
router.get('/transaction/:id', transactions.getTransaction);
router.post('/transaction/create', transactions.createTransaction);
router.put('/transaction/:id', transactions.updateTransaction);
router.delete('/transaction/:id', transactions.deleteTransaction);

module.exports = router;
