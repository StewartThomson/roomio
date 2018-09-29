let express = require('express');
let router = express.Router();
let base = process.env.PWD;
let mates = require(base + '/controllers/mates');
let transactions = require(base + '/controllers/transactions');
let rooms = require(base + '/controllers/rooms');
let userMgmt = require(base + '/controllers/userMgmt');

router.get('/mates', mates.getMates);
router.get('/mate/:id', mates.getMate);
router.get('/mateEmail/:email', mates.getMateByEmail);
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
router.post('/joinRoom', rooms.addMateToRoom);

router.post('/userMgmt/invite', userMgmt.inviteUser);

module.exports = router;
