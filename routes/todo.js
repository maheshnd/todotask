const express = require('express');
const {
  addTask,
  getAllTask,
  updateTask,
  deleteTask,
} = require('../controllers/todo');
const { isApiEnable } = require('../middleware/isApiEnable');
const router = express.Router({ mergeParams: true });

router.post('/add', isApiEnable, addTask);
router.get('/getall', isApiEnable, getAllTask);
router.put('/update/:id', isApiEnable, updateTask);
router.delete('/delete/:id', isApiEnable, deleteTask);

module.exports = router;
