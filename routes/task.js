const express = require('express');
const {createTask, getTask, getAllTask,deleteTask,editTask } = require('../controller/task');

const router = express.Router();

router.post('/task', createTask);
router.get('/task', getAllTask);
router.get('/task/:id', getTask);
router.delete('/task/:id', deleteTask);
router.put('/task/:id', editTask);

module.exports = router;

