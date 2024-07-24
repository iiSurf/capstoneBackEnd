import express from 'express';
const router = express.Router();
import progressCtrl from '../controllers/progress.mjs';

//Create
router.post('/', progressCtrl.CreateProgress);

//Read
router.get('/', progressCtrl.ReadProgress);

//Update
router.put('/:id', progressCtrl.UpdateProgress);

//Delete
router.delete('/:id', progressCtrl.DeleteProgress);

export default router;