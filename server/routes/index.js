var express = require('express');
var router = express.Router();
var base = process.env.PWD;
var mates = require(base + '/controllers/mates');
var transactions = require(base + '/controllers/transactions');
var rooms = require(base + '/controllers/rooms');

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

router.get('/rooms', rooms.getRooms);
router.get('/room/:id', rooms.getRoom);
router.post('/room/create', rooms.createRoom);
router.put('/room/:id', rooms.updateRoom);
router.delete('/room/:id', rooms.deleteRoom);
router.put('/room/:roomId/:mateId', rooms.addMateToRoom);

module.exports = router;
