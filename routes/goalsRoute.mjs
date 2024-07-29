import express from 'express';
const router = express.Router();
import goalsCtrl from '../controllers/goals.mjs';

// Create
router.post('/', goalsCtrl.CreateGoals);

// Read
router.get('/', goalsCtrl.ReadGoals);

// Update
router.put('/:id', goalsCtrl.UpdateGoals);

// Delete
router.delete('/:id', goalsCtrl.DeleteGoals);

export default router;
